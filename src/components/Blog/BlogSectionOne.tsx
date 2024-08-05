import { BlogSectionOneData } from "@/components/Blog/blogData";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const BlogSectionOne = () => {
  return (
    <>
      <section id="features" className="mt-0 pb-[100px] md:mt-16">
        <div className="container">
          <SectionTitle title="How to build team" paragraph="" center />
          <div className="flex flex-wrap">
            {BlogSectionOneData.map((item, index) => (
              <div
                key={`${item.id}`}
                className={`flex flex-col items-center pb-6  pl-2 pr-2 md:w-1/5 md:pr-0 ${item.id === 5 ? "w-full pl-0" : "w-1/2 md:pl-8"}`}
              >
                <div
                  className={`flex aspect-square w-[70px] items-center justify-center rounded-full bg-[#FFEFEF] md:w-[100px]`}
                >
                  {item.icon}
                </div>
                <p className="mt-5 text-center text-base font-semibold md:text-2xl">
                  {item.title}
                </p>
                <p className="mt-5  max-w-[250px] text-center text-xs md:text-lg">
                  {item.subTitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSectionOne;
