import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import FeatureSwitch from "./FeatureSwitch";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What We Do"
            paragraph="Build & run your IT Dream Team"
            center
          />

          <FeatureSwitch />
          <div className="relative mr-[-300px] mt-[-50px]">
            <div className="absolute bottom-0 right-10 z-[-1]">
              <Image
                src="/svgs/multiple-dot.svg"
                alt="hero-touch"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "50%",
                  minWidth: "600px",
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
