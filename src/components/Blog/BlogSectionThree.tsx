import { BlogSectionOneData } from "@/components/Blog/blogData";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import { number } from "yup";

interface Block {
  number: number;
  title: string;
  subTitle: string;
  className: string;
}

const blocks = [
  {
    number: 1,
    title: "Shaping Culture",
    subTitle: "Developing a cultural handbook or guide",
    className: "md:w-[240px] xl:w-[300px]",
  },
  {
    number: 2,
    title: "Communication and Practice",
    subTitle: "Fostering awareness, attitude, and behavior among employees",
    className: "md:w-[280px] xl:w-[370px]",
  },
  {
    number: 3,
    title: "Sustaining Corporate Culture",
    subTitle:
      "Ensuring employees consistently apply the core principles from the cultural handbook in their daily work",
    className: "flex-1",
  },
];
const BlogSectionThree = () => {
  const numberBlock = ({ number, title, subTitle, className }: Block) => {
    return (
      <div className={`${className} mt-10 flex flex-row md:mt-0 `}>
        <div className="">
          <p className="min-w-[50px] text-[60px] leading-[50px] text-primary md:mt-0 md:text-[145px] md:leading-[100px] xl:text-[247px] xl:leading-[185px]">
            {number}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold md:flex-1 md:text-base xl:text-xl">{title}</p>
          <p className="md:mb-0 md:text-sm xl:text-lg">{subTitle}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <section id="features" className="pb-[100px]">
        <div className="container">
          <SectionTitle title="Working Culture" paragraph="" center />
          <div className="mt-[-70px] md:mt-0 md:flex md:flex-row">
            <p className="pr-5 text-justify">
              <p className="text-lg leading-8">
                {`The working culture of an employee, team, or company is rooted
                in the core of corporate culture. It is comparable to a
                waterfall, starting from the leadership's goals and vision and
                flowing through management, operations, training, and delivery,
                finally reaching the implementation staff. To ensure the flow
                remains uninterrupted, continuous collaboration and connection
                among members are essential. Without a structured plan to build
                corporate culture, the founder's rules and policies remain
                isolated and are not embraced by employees, leading to a
                spontaneous and unorganized culture.`}
              </p>
              <br />
              <p className="text-lg leading-8">
                {`Each country has a unique working culture. To harmonize and
                maximize the core values that founders aim to achieve, companies
                must design, build, communicate, and implement a foundational
                cultural framework. This framework should balance existing
                resources (human resources, finance, business plans) with the
                expectations of the founders and managers. This involves
                surveying and confirming the core value characteristics.`}
              </p>
            </p>
            <div className="md:mt-[-30px] xl:w-[350px] 2xl:w-[450px]">
              <Image
                src="/images/blog/culture.png"
                alt="culture"
                width={0}
                height={0}
                sizes="100vw"
                objectFit={"contain"}
                style={{
                  width: "100%",
                  minWidth: "300px",
                }}
              />
            </div>
          </div>
          <p className="mt-10 text-lg font-semibold">
            Building and forming corporate culture involves three main stages:
          </p>
          <div className="mt-0 flex flex-col md:mt-7 md:flex-row">
            {blocks.map((item: Block, index) => numberBlock({ ...item }))}
          </div>
          <p className="mt-7 text-justify text-lg">
            {`This process must be sequentially implemented to influence
            employees' awareness, attitudes, and behaviors, ensuring the core
            values in the cultural handbook are embraced and reflected in their
            actual conduct`}
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogSectionThree;
