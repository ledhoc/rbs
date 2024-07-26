import ListItem from "@/components/About/ListItem";
import ContactButton from "@/components/Button/ContactButton";
import Image from "next/image";
import { text } from "stream/consumers";

const list = [
  "Need to build an IT team to meet your business development needs?",
  "Need technology consulting and solutions to meet your company's current demands?",
  "Need efficient processes to save time and reduce costs for your team or company?",
  "RB will consult and collaborate with you to address these challenges.",
];
const AboutSectionTwo = () => {
  return (
    <section className="">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/laptop-hire.svg"
                alt="hire image"
                fill
                className="drop-shadow-three dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="mt-12 w-full max-w-[860px] lg:w-2/3">
            <h3 className="flex flex-wrap text-[50px]">
              Looking to hire&nbsp;
              <p className="text-primary">top IT&nbsp;</p>
              engineers &#13;for&nbsp;
              <p className="text-primary">your project</p>?
            </h3>
            <div className="mt-3 flex flex-col">
              {list.map((text, index) => (
                <ListItem key={`${index}`} text={text} />
              ))}
            </div>
            <div className="mt-9">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
