"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-gray-100 dark:bg-gray-dark lg:px-20">
      <div className="container">
        <SectionTitle
          title="Build a Team"
          paragraph="RB offers comprehensive team-building packages designed to meet your specific project needs. Our packages provide tailored solutions to help you assemble and maintain a highly skilled IT team. Choose from our four packages"
          center
          width="700px"
        />
        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            packageName="Basic"
          >
            <p className="m-1 text-base font-bold text-body-color">Requirement Confirmation</p>
            <OfferList text="Confirm project requirements and HR targets" status="active" />
            <OfferList text="Consult on suitable solutions and technologies based on project demands" status="active" />
            <OfferList text="Suggest personnel with appropriate skills" status="active" />
            <p className="m-1 text-base font-bold text-body-color">HR Consultation</p>
            <OfferList text="Advise on wages and benefits" status="active" />
            <OfferList text="Recommend the skills, levels, and quantity of candidates required for the team" status="active" />
            <OfferList text="Consult on training fees and backup personnel preparation" status="active" />
            <p className="m-1 text-base font-bold text-body-color">Recruitment</p>
            <OfferList text="Develop a recruitment plan based on budget" status="active" />
            <OfferList text="Prepare CV data and set up interview schedules" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Standard"
          >
            <p className="text-base text-body-color">Includes all services from the Basic Package, plus</p>
            <p className="m-1 text-base font-bold text-body-color">Technical Consulting</p>
            <OfferList text="Support in resolving technical issues during project deployment" status="active" />
            <OfferList text="Address technical challenges and changes due to business plan adjustments" status="active" />
            <p className="m-1 text-base font-bold text-body-color">Operational Processing</p>
            <OfferList text="Consult on basic operational processes for back office, project development, and recruitment departments" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium"
          >
            <p className="text-base text-body-color">Includes all services from the Standard Package, plus:</p>
            <p className="m-1 text-base font-bold text-body-color">Working Culture</p>
            <OfferList text="Consult on activities to build and maintain a positive working culture for the team/company" status="active" />
            <OfferList text="Collaborate with culture experts to develop and implement a core culture framework" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Startup"
          >
            <p className="text-base text-body-color">Includes all services from the Premium Package, plus:</p>
            <p className="m-1 text-base font-bold text-body-color">Working Culture</p>
            <OfferList text="Consult on activities to build and maintain a positive working culture for the team/company" status="active" />
            <OfferList text="Collaborate with culture experts to develop and implement a core culture framework" status="active" />
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
              <stop stopColor="red" />
              <stop offset="1" stopColor="red" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="red" />
              <stop offset="1" stopColor="red" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
