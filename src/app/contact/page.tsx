import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Page | Red Breed",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap ">
            <div className="flex w-full  flex-col items-center justify-center">
              <h1 className="mb-5 text-2xl font-bold text-primary dark:text-white sm:text-6xl">
                {"Get in touch"}
              </h1>
              <p className="text-xl font-medium text-gray-light">
                {
                  "Drop us a line through the form below and we'll get back to you"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;
