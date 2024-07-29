import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import FeatureSwitch from "./FeatureSwitch";

const Features = () => {
  return (
    <>
      <section id="features" className="py-0 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What We Do"
            paragraph="Build & run your IT Dream Team"
            center
          />

          <div className="mt-[-80px] md:mt-0">
            <FeatureSwitch />
          </div>
          <div className="invisible  w-0 md:visible md:w-auto">
            <div className="absolute  bottom-[-950px] right-10 z-[-1] w-[400px]">
              <Image
                src="/svgs/multiple-dot.svg"
                alt="hero-touch"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
