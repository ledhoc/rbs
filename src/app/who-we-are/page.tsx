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
import Profile from "@/components/Profile";

export const metadata: Metadata = {
  title: "Who we are | Red Breed",
  icons: { icon: "/favicon.ico" },
  description:
    "Leading IT consulting and talent solutions for business success",
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

const WhoWeAre = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-28">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="flex w-full flex-col md:mt-20 md:w-1/2">
                <h1 className="text-center text-2xl md:text-left md:text-3xl">
                  Our Founding Story
                </h1>
                <p className="md:xs-7 mt-3 text-base font-thin sm:text-sm md:text-lg">
                  Red Breed Tech was born from a shared vision between three
                  tech enthusiasts—Michael, Duyen, and Tan—who saw an unmet need
                  in their hometown of Da Nang. As seasoned professionals, they
                  realized that startups and IT companies in the region were
                  struggling to find specialized consulting services to drive
                  their growth. Despite the booming tech scene, there was a gap
                  in the market for tailored, expert guidance.
                  <br />
                  <br />
                  <p>
                    Driven by a passion for innovation and a deep understanding
                    of the industry`&apos;`s challenges, the trio decided to
                    close that gap. They founded Red Breed Tech with a simple
                    yet powerful mission: to be the go-to consulting firm
                    `&quot;`from builders for builders.`&quot;` With their
                    combined expertise and commitment to excellence, they
                    quickly established Red Breed Tech as the premier IT
                    consulting firm in the region, helping businesses thrive in
                    the ever-evolving digital landscape.
                  </p>
                </p>
              </div>
              <Profile />
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
              </div>
              <div className="ml-2 flex flex-1 flex-col md:ml-10">
                <div className="mb-5 flex w-full flex-col">
                  <h1 className="text-center text-4xl font-bold text-primary md:text-left md:text-5xl">
                    Our Team
                  </h1>
                  <p className="md:xs-7 mt-3 text-base sm:text-sm md:text-lg">
                    Our team comprises over 300 highly skilled professionals,
                    each bringing unique expertise and experience to our
                    projects. We pride ourselves on our diverse and talented
                    team, including:
                  </p>
                </div>
                {data.map(({ id, position, description }) => {
                  return (
                    <div
                      key={`${id}-${position}`}
                      className="mb-8 flex flex-col"
                    >
                      <p className="text-xl font-semibold text-primary">
                        {position}
                      </p>
                      <p className="mt-2 text-base font-thin md:text-lg">
                        {description}
                      </p>
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

export default WhoWeAre;
