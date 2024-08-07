import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CardVisit from "@/components/CardVisit";
import AboutCountry from "@/components/Icons/AboutCountry";
import AboutPeople from "@/components/Icons/AboutPeople";
import AboutLocation from "@/components/Icons/AboutLocation";
import AboutClient from "@/components/Icons/AboutClient";

export const metadata: Metadata = {
  title: "Who we are | Red Breed",
  description: "This is Who We Are Page for Red Breed",
  // other metadata
};
const data = [
  {
    id: 0,
    position: "Tech Leader",
    description:
      "Our tech leader oversees the technical direction of the company, ensuring that we stay at the forefront of technology trends and deliver innovative solutions to our clients.",
  },
  {
    id: 1,
    position: "Key Technologists",
    description:
      "Our key tech experts specialize in various fields such as AI, machine learning, cloud computing, and cybersecurity, providing deep technical knowledge and cutting-edge solutions.",
  },
  {
    id: 2,
    position: "Chief Technology Officer (CTO)",
    description:
      "The CTO guides our technological strategy and innovation, ensuring that we leverage the latest technologies to meet our clients' needs.",
  },
  {
    id: 3,
    position: "Project Managers (PM)",
    description:
      "Our project managers ensure that all projects are delivered on time, within scope, and within budget. They coordinate teams, manage resources, and maintain constant communication with clients.",
  },
  {
    id: 4,
    position: "Design Leads",
    description:
      "Our design leads create user-centric designs that enhance the user experience and ensure that our solutions are both functional and aesthetically pleasing.",
  },
  {
    id: 5,
    position: "Business Analysts",
    description:
      "Our business analysts bridge the gap between technology and business, understanding client requirements and translating them into effective technical solutions.",
  },
  {
    id: 6,
    position: "Marketing Solutions Team",
    description:
      "Our marketing solutions experts help clients enhance their online presence and reach their target audience through innovative digital marketing strategies.",
  },
  {
    id: 7,
    position: "Consultants",
    description:
      "Our consultants provide expert advice and solutions across various industries, helping businesses optimize their operations and implement effective IT strategies.",
  },
  {
    id: 8,
    position: "Developer",
    description:
      "Our developers deliver comprehensive solutions, ensuring efficient project management, risk mitigation, deadline adherence, and seamless team coordination.",
  },
];

const teamData = [
  {
    icon: <AboutCountry />,
    title: "04",
    subTitle: "Countries",
  },
  {
    icon: <AboutClient />,
    title: "40",
    subTitle: "Clients",
  },
  {
    icon: <AboutLocation />,
    title: "06",
    subTitle: "Locations",
  },
  {
    icon: <AboutPeople />,
    title: "300",
    subTitle: "People",
  },
];

const ContactPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28">
        <div className="container">
          <div className="flex flex-col">
            <div className="invisible flex h-0 md:visible md:h-auto">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-gray-light hover:text-primary"
                    >
                      Home
                    </Link>
                    <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
                  </li>
                  <li className="text-base font-medium text-primary">
                    {"Who We Are"}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex w-full flex-col justify-center  md:w-1/2">
                <h1 className="text-center text-3xl font-bold text-primary md:text-left md:text-6xl">
                  Our Team
                </h1>
                <p className="mt-3 text-justify text-base md:mt-7  md:text-xl">
                  Our team comprises over 300 highly skilled professionals, each
                  bringing unique expertise and experience to our projects. We
                  pride ourselves on our diverse and talented team, including:
                </p>
              </div>
              <div className="mt-10 flex w-full justify-center text-center md:ml-0  md:w-1/2">
                <Image
                  src={"/images/whoweare/positions.png"}
                  width={500}
                  height={500}
                  alt={"who-we-are"}
                />
              </div>
            </div>
            <div className="mb-0 mt-9 flex flex-row md:mb-9">
              <div className="invisible  w-0 md:visible md:w-auto">
                <Image
                  src="/images/whoweare/team-case.png"
                  alt="team-case"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit={"contain"}
                  style={{
                    width: "100%",
                    minWidth: "400px",
                  }}
                />
                {/* <div className="flex flex-col">
                  <CardVisit color={"bg-primary"} />
                  <div className="mt-5">
                    <CardVisit color="bg-[#EBF5FF]" />
                  </div>
                </div>
                <div className="ml-5 mt-20 flex flex-col">
                  <CardVisit color="bg-[#EBF5FF]" />
                  <div className="mt-5">
                    <CardVisit color={"bg-primary"} />
                  </div>
                </div> */}
              </div>
              <div className="ml-2 flex flex-1 flex-col md:ml-10">
                {data.map(({ id, position, description }) => {
                  return (
                    <div
                      key={`${id}-${position}`}
                      className="mb-8 flex flex-col"
                    >
                      <p className="text-xl font-semibold text-primary">
                        {position}
                      </p>
                      <p className="mt-2 text-lg font-thin">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col items-center justify-center bg-[#FFFBFB] md:my-20">
          <p className="mx-6 mt-14 flex text-center  text-[18px] font-semibold text-gray-light md:mx-8 md:text-[30px]">
            Our experts have been working alongside in-house teams for over a
            decade.
          </p>
          <div className="container grid  w-full grid-cols-2 gap-x-2 py-8 md:grid-cols-4 md:gap-x-8 md:py-16">
            {teamData.map((item, index) => (
              <div
                key={`${index}`}
                className="mb-7 mr-2 flex aspect-square flex-col items-center justify-center rounded-full border-[1px] border-dashed border-primary bg-white text-gray-light md:mb-auto"
              >
                {item.icon}
                <p className="font-bold md:text-[64px]">{item.title}</p>
                <p className="md:text-[19px]">{item.subTitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
