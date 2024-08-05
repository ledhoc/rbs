import Link from "next/link";
import HeroBackground from "./Background";
import Image from "next/image";
import ArrowCurve from "public/svgs/arrow-curve.svg";
import ArrowRight from "public/svgs/arrow_right.svg";
import ContactButton from "@/components/Button/ContactButton";

const Hero = ({
  title,
  subtitle,
  content,
  image,
}: {
  title?: string;
  subtitle?: string;
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
                <h1 className="text-3xl font-bold leading-tight text-gray-light sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                  {title || "Build & Run your"}
                </h1>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                  {subtitle || "IT Dream Team"}
                </h1>
                <p className="max-w-[550px] text-justify text-gray-light">
                  {content ||
                    "Our comprehensive solution provides you with everything you need to build your dream IT team, from identifying your specific staffing needs to recruiting, assessing, training, and retaining top talent."}
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
                className={`mt-[50px] flex flex-col items-center  ${image ? "md:mt-[-20px]" : "md:mt-[-50px]"}  md:w-1/2`}
              >
                <div className="hidden md:block">
                  <Image
                    src={image || "/images/hero/touch.png"}
                    alt="hero-touch"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "80%",
                      height: image ? "auto" : "100%",
                      minWidth: "400px",
                    }}
                  />
                </div>
                <div className="block pb-32 md:hidden">
                  <Image
                    src={image || "/images/hero/touch.png"}
                    alt="hero-touch"
                    width={image ? 320 : 280}
                    height={image ? 174 : 310}
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
      </section>
    </>
  );
};

export default Hero;
