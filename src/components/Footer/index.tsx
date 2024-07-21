"use client";
import FooterBackground from "@/components/Footer/Background";
import LocationIcon from "@/components/Footer/locationIcon";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Logo width={241} height={54} color="white" />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-white">
                  We build killer Squarespace sites with our quick and pain-free
                  process
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-1/3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">
                  Our Offices
                </h2>
                <ul className="flex flex-col">
                  <li className="flex flex-row">
                    <div>
                      <LocationIcon />
                    </div>
                    <p className="ml-3 text-white">
                      Ground Floor, Suite B-D, The Maltsters, Wetmore Road,
                      Burton-on-trent, Staffordshire, DE14 1LS
                    </p>
                  </li>
                </ul>
                <ul className="mt-3 flex flex-col">
                  <li className="flex flex-row">
                    <div>
                      <LocationIcon />
                    </div>
                    <p className="ml-3 text-white">
                      Ground Floor, Suite C-D, The Maltsters, Wetmore Road,
                      Burton-on-trent, Staffordshire, DE14 1LS
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-white">
              Copyright © 2024 Red Breed
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <FooterBackground />
        </div>
      </footer>
    </>
  );
};

export default Footer;
