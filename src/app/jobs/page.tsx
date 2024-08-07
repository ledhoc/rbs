import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jobs Page | Red Breed",
  description: "This is Jobs Page for Red Breed",
  // other metadata
};

const JobsPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="mx-0 flex flex-wrap md:-mx-4 ">
            <div className="flex  w-full  flex-col items-center justify-center">
              <Image
                src="/svgs/comming-soon.svg"
                alt="comming-soon"
                width={0}
                height={0}
                sizes="100vw"
                objectFit={"contain"}
                style={{
                  width: "100%",
                  minWidth: "200px",
                  maxHeight: "300px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsPage;
