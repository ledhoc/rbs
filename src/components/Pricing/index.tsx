"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Dot from "@/components/Icons/Dot";

interface TextItemProps {
  text: string;
  isDot?: boolean;
}
const TextItem = ({ text, isDot = true }: TextItemProps) => {
  return (
    <div className="flex">
      {isDot && (
        <div className="mt-2">
          <Dot color={"#000000"} />
        </div>
      )}
      <div className={`${isDot ? "ml-3" : "ml-0"} text-gray-light`}>
        <span className="text-justify text-xs">{text}</span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedIndex, setIndex] = useState(2);

  return (
    <section id="pricing" className="relative z-10 py-20 md:py-20 lg:py-20">
      <div className="container">
        <SectionTitle
          title="WHAT DO YOU NEED?"
          paragraph="We provide specialised team-building solutions tailored to your unique project requirements. Our packages are designed to help you efficiently assemble and sustain a top-tier IT team. Select from four customizable packages to suit your needs."
          center
          width="980px"
          mb="40px"
        />
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <PricingBox
            onClickBox={() => setIndex(0)}
            packageName="Free Initial Consultation"
            packageId="free"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
            selected={selectedIndex === 0}
          >
            <div className="flex flex-col">
              <TextItem
                isDot={false}
                text={
                  "Let’s have a chat – video call or face-to-face – to talk about your tech needs. It’s free, no strings attached. If we’re a good match, we can figure out what’s next from there."
                }
              />
            </div>
          </PricingBox>
          <PricingBox
            onClickBox={() => setIndex(1)}
            packageName="Starter Package"
            packageId="starter"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
            selected={selectedIndex === 1}
          >
            {/* <p className="mb-3 text-xs">
              Includes all services from the Basic Package, plus
            </p> */}
            <p className="text-sm font-semibold">Understanding Your Needs</p>
            <TextItem
              text={"We’ll check what your project needs and your hiring goals"}
            />
            <TextItem
              text={
                "We’ll suggest the best tools and solutions based on what you need"
              }
            />
            <TextItem
              text={"We’ll recommend people with the right skills for the job"}
            />
            <p className="mt-3 text-sm font-semibold">
              Human Resources Support
            </p>
            <TextItem
              text={
                "We’ll give advice on how much to pay and what benefits to offer"
              }
            />
            <TextItem
              text={
                "We’ll help figure out what kind of skills and how many people your team needs"
              }
            />
            <TextItem
              text={
                "We’ll also advise on training costs and having extra staff ready, just in case"
              }
            />
            <p className="mt-3 text-sm font-semibold">Hiring</p>
            <TextItem
              text={"We’ll create a hiring plan that fits your budget"}
            />
            <TextItem
              text={"We’ll help gather resumes and set up interviews"}
            />
            <p className="mt-3 text-sm font-semibold">
              Operational Process Consulting
            </p>
            <TextItem
              text={
                "We’ll help you set up smooth and efficient workflows for your team or company"
              }
            />
            <p className="mt-3 text-sm font-semibold">Technical Consulting</p>
            <TextItem
              text={
                "We’ll charge based on how many hours we work to solve your tech problems"
              }
            />
            <p className="mt-3 text-sm font-semibold">
              Team Commitment & Cohesion Consulting
            </p>
            <TextItem
              text={
                "We’ll advise on how to keep employees happy, loyal, and working well together "
              }
            />
          </PricingBox>
          <PricingBox
            onClickBox={() => setIndex(2)}
            packageName="Growth Package"
            packageId="growth"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
            selected={selectedIndex === 2}
            isTheBest
            isPrimaryColor
          >
            <p className="mb-3 text-xs">Includes Starter Package, plus:</p>
            <p className="text-sm font-semibold">Hiring</p>
            <TextItem
              text={
                "We’ll help you find the right people to build your IT team"
              }
            />
            <p className="mt-3 text-sm font-semibold">Office Setup</p>
            <TextItem
              text={
                "We’ll assist in setting up a proper office space for your team"
              }
            />
            <p className="mt-3 text-sm font-semibold">
              Operational Process Setup
            </p>
            <TextItem
              text={
                "We’ll create detailed processes that fit the specific needs of your project, making sure everything runs smoothly"
              }
            />
          </PricingBox>
          <PricingBox
            onClickBox={() => setIndex(3)}
            packageName="Premium Package"
            packageId="premium"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle=""
            selected={selectedIndex === 3}
          >
            <p className="mb-3 text-xs">Includes Growth Package, plus:</p>
            <p className="text-sm font-semibold">Run IT Teams</p>
            <TextItem
              text={
                "We’ll take care of managing your IT teams to keep everything running smoothly"
              }
            />
            <p className="mt-3 text-sm font-semibold">Manage Operations</p>
            <TextItem
              text={
                "We’ll handle the day-to-day processes for your project, back office, and overall office operations"
              }
            />
            <TextItem text={"Business Feasibility Analysis"} />
            <TextItem text={"Market Release Support"} />
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
