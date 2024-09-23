"use client";

import { useForm } from "react-hook-form";
import SpringModal from "@/components/SpringModal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import * as yup from "yup";
import NewsLatterBox from "./NewsLatterBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingModal from "@/components/Loading";
import { createContactApi } from "@/services/firebase";
import SelectTags from "@/components/SelectTags";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    messages: yup.string().required(),
    package: yup.string().required(),
    email: yup
      .string()
      .email("Email is invalid")
      .required("Please input your email"),
  })
  .required();

const packages = [
  { id: "free", title: "Free" },
  { id: "starter", title: "Starter" },
  { id: "growth", title: "Growth" },
  { id: "premium", title: "Premium" },
];

const Contact = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // eslint-disable-next-line no-use-before-define
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    getFieldState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: {},
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fIndex = packages.findIndex(
      (p) => p["id"] === searchParams.get("package"),
    );
    if (fIndex > -1) {
      setValue("package", searchParams.get("package") || "premium");
    } else {
      setValue("package", "premium");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onSubmit = (data) => {
    try {
      setLoading(true);
      const request = { ...data };
      const response = createContactApi(request);
      if (response) {
        setTimeout(() => {
          reset();
          setLoading(false);
          setIsOpen(true);
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const onCancelModal = () => {
    setIsOpen(false);
  };
  const onNextAction = () => {
    router.push("/");
  };

  const onSelectTag = (id: string) => {
    console.log("id", id);
    setValue("package", id);
  };

  return (
    <section id="contact" className="overflow-hidden pb-16 pt-10">
      <LoadingModal isOpen={isLoading} setIsOpen={setLoading} />
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onCancel={onCancelModal}
        onNextAction={onNextAction}
      />
      <div className="container">
        <div className="bg-red -mx-0 flex flex-wrap rounded-xl border-[1px] md:-mx-4 md:border-primary">
          <div className="flex w-full  xl:w-5/12">
            <NewsLatterBox />
          </div>
          <div className="w-full px-4 xl:w-7/12">
            <div
              className="rounded-sm bg-white pr-4 pt-4"
              data-wow-delay=".15s
              "
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-4 mt-5 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName")}
                        placeholder="Enter your first name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="lastName"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName")}
                        placeholder="Enter your last name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 ">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Choose a Package
                      </label>
                      <SelectTags
                        selectedId={watch("package")}
                        list={packages}
                        onClick={onSelectTag}
                      />
                    </div>
                  </div>
                  <div className="mx-4 w-full">
                    <div className="mb-8">
                      <label
                        htmlFor="messages"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="messages"
                        {...register("messages")}
                        rows={6}
                        placeholder="Enter your Message"
                        className="border-stroke flex w-full flex-1 resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-7 mt-5 flex w-full flex-col-reverse px-4">
                    <button className="overflow-hidden rounded-xl bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
