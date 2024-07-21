"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Dot from "@/components/Icons/Dot";

interface TextItemProps {
  text: string;
}
const TextItem = ({ text }: TextItemProps) => {
  return (
    <div className="flex">
      <div className="mt-2">
        <Dot color={"#000000"} />
      </div>
      <div className="ml-3 text-gray-light">
        <span className="text-justify text-xs">{text}</span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="CHOOSE YOUR PACKAGE"
          paragraph="RB offers comprehensive team-building packages designed to meet your specific project needs. Our packages provide tailored solutions to help you assemble and maintain a highly skilled IT team. Choose from our four packages:"
          center
          width="800px"
        />

        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <div className="flex flex-col">
              <p className="text-sm font-semibold">Requirement Confirmation</p>
              <TextItem text={"Confirm project requirements and HR targets"} />
              <TextItem
                text={
                  "Consult on suitable solutions and technologies based on project demands"
                }
              />
              <TextItem text={"Suggest personnel with appropriate skills"} />
              <p className="mt-3 text-sm font-semibold">HR Consultation</p>
              <TextItem text={"Advise on wages and benefits"} />
              <TextItem
                text={
                  "Recommend the skills, levels, and quantity of candidates required for the team"
                }
              />
              <TextItem
                text={
                  "Consult on training fees and backup personnel preparation"
                }
              />
              <p className="mt-3 text-sm font-semibold">{"Recruitment"}</p>
              <TextItem text={"Develop a recruitment plan based on budget"} />
              <TextItem
                text={"Prepare CV data and set up interview schedules"}
              />
            </div>
          </PricingBox>
          <PricingBox
            packageName="Standard"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <p className="mb-3 text-xs">
              Includes all services from the Basic Package, plus
            </p>
            <p className="text-sm font-semibold">Technical Consulting</p>
            <TextItem
              text={
                "Support in resolving technical issues during project deployment"
              }
            />
            <TextItem
              text={
                "Address technical challenges and changes due to business plan adjustments"
              }
            />
            <p className="mt-3 text-sm font-semibold">Operational Processing</p>
            <TextItem
              text={
                "Consult on basic operational processes for back office, project development, and recruitment departments"
              }
            />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <p className="mb-3 text-xs">
              Includes all services from the Standard Package, plus
            </p>
            <p className="text-sm font-semibold">Working Culture</p>
            <TextItem
              text={
                "Consult on activities to build and maintain a positive working culture for the team/company"
              }
            />
            <TextItem
              text={
                "Collaborate with culture experts to develop and implement a core culture framework"
              }
            />
          </PricingBox>
          <PricingBox
            packageName="Premium"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
          >
            <p className="mb-3 text-xs">
              Includes all services from the Premium Package, plus
            </p>
            <p className="text-sm font-semibold">
              Business Feasibility Analysis
            </p>
            <TextItem
              text={
                "Analyze and consult on the feasibility of the business plan for each project"
              }
            />
            <p className="mt-3 text-sm font-semibold">
              Market Release Support:
            </p>
            <TextItem
              text={
                "Consult and support the processes required to release and distribute products to the market"
              }
            />
            <p className="mt-5 text-[13px]">
              With RB's team-building packages, you can ensure your project is
              supported by a team of skilled professionals, tailored to your
              specific needs, and equipped to handle any challenges that arise.
            </p>
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
