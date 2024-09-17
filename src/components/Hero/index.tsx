import Link from "next/link";
import HeroBackground from "./Background";
import Image from "next/image";
import ArrowCurve from "public/svgs/arrow-curve.svg";
import ArrowRight from "public/svgs/arrow_right.svg";
import ContactButton from "@/components/Button/ContactButton";

const Hero = ({
  title,
  titleClass,
  subtitle,
  subtitleClass,
  content,
  image,
}: {
  titleClass?: string;
  title?: string;
  subtitle?: string;
  subtitleClass?: string;
  content?: string;
  image?: string;
}) => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-0 pt-[100px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex">
            <div className="flex w-full flex-col px-4 md:flex-row">
              <div className="flex flex-col  items-center md:w-1/2 md:items-start">
                <h1
                  className={`font-bold leading-tight text-gray-light  md:leading-tight ${titleClass ? titleClass : "text-3xl sm:text-4xl sm:leading-tight md:text-4xl xl:text-5xl "}`}
                >
                  {title || "Build & Power your"}
                </h1>
                <h1
                  className={`mb-5  font-bold leading-tight text-primary  sm:leading-tight  md:leading-tight ${subtitleClass ? subtitleClass : "text-3xl sm:text-4xl  sm:leading-tight md:text-5xl md:leading-tight"}`}
                >
                  {subtitle || "Elite IT-Team"}
                </h1>
                <p className="mr-6 flex max-w-[550px] text-center text-gray-light md:text-left">
                  {content ||
                    "We provide solutions for recruiting, assessing, training and retaining top tech talent, tailored to your project’s needs."}
                </p>
                <div className="mt-[50px]">
                  <ContactButton />
                  <div className="ml-[-85px] mt-[-105px] md:ml-[-75px]  md:mt-[-122px]">
                    <Image
                      src="/svgs/arrow-curve.svg"
                      alt="arrow-curve"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`mt-[50px] flex flex-col items-center  ${image ? "xl:mt-[-30px] 2xl:mt-[-70px]" : "justify-center md:mt-[-50px]"}  overflow-clip md:w-1/2`}
              >
                <div className="hidden md:block">
                  <Image
                    src={image || "/images/hero/touch.png"}
                    alt="hero-touch"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: image ? "auto" : "100%",
                      minWidth: "500px",
                    }}
                  />
                </div>
                <div className="block pb-32 md:hidden">
                  <Image
                    src={image || "/images/hero/touch.png"}
                    alt="hero-touch"
                    width={image ? 320 : 320}
                    height={image ? 174 : 280}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-[50px] z-[-1] opacity-30 lg:opacity-100">
          <HeroBackground />
        </div>
        <div className="absolute left-0 top-[50px] z-[-1] hidden md:block">
          <svg
            width="126"
            height="126"
            viewBox="0 0 126 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="126"
              fill="url(#paint0_linear_791_5923)"
              fill-opacity="0.18"
            />
            <defs>
              <linearGradient
                id="paint0_linear_791_5923"
                x1="-54.4983"
                y1="-51.8824"
                x2="39.6747"
                y2="100.713"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF3131" />
                <stop offset="1" stop-color="#FFC3C3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
