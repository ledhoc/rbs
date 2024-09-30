import { clientData } from "@/components/Clients/clientData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Client | Red Breed",
  icons: { icon: "/favicon.ico" },
  description:
    "Leading IT consulting and talent solutions for business success",
  // other metadata
};

export default function Client() {
  return (
    <>
      <div className="relative z-10 overflow-hidden bg-white pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="relative flex items-center justify-center overflow-visible py-10">
            <Image
              src="/svgs/our-clients.svg"
              alt="Our Clients"
              width={644}
              height={125}
              className="absolute    z-0 "
            />
            <h1 className="relative z-10 text-center text-3xl text-primary">
              Here are some of our clients
            </h1>
          </div>
          <div className="mb-32 mt-10 flex justify-center">
            <div className="grid w-full max-w-[1070px] grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
              {clientData.map((x) => (
                <div
                  key={x.id}
                  className="mt-3 flex h-[200px] w-full items-center justify-center rounded-2xl bg-white shadow-[3px_4px_18px_rgba(0,0,0,0.1)] md:w-[220px] xl:w-[342px]"
                >
                  <div className={`flex  items-center ${x.class}`}>
                    <Image
                      src={x.image}
                      alt={x.name}
                      width={342}
                      height={180}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
