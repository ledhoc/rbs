import Image from "next/image";

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
          <div className="w-full max-w-[860px] lg:w-2/3">
            <h3 className="flex flex-wrap text-[50px]">
              Looking to hire&nbsp;
              <h3 className="text-primary">top IT&nbsp;</h3>
              engineers &#13;for&nbsp;
              <h3 className="text-primary">your project</h3>?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
