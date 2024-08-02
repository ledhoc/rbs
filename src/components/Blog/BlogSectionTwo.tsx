import {
  BlogDataSituation,
  BlogSectionOneData,
} from "@/components/Blog/blogData";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import BlogDataItem from "@/components/Blog/BlogDataItem";

const BlogSectionTwo = () => {
  return (
    <>
      <section id="features" className="pb-[100px]">
        <div className="container">
          <SectionTitle title="Data on the IT Situation" paragraph="" />
          <div className="mt-[-50px] flex flex-col">
            {BlogDataSituation.map((item, index) => (
              <BlogDataItem
                key={`${index}`}
                {...{ item }}
                isEnd={BlogDataSituation.length - 1 === index}
              />
            ))}
          </div>
          <div className="invisible  w-0 md:visible md:w-auto">
            <div className="absolute  bottom-[-100px] left-[-100px] z-[-1] w-[400px]">
              <Image
                src="/svgs/multiple-dot.svg"
                alt="hero-touch"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSectionTwo;
