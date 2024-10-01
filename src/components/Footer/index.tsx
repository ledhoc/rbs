"use client";
import LocationIcon from "@/components/Footer/LocationIcon";
import menuData from "@/components/Header/menuData";
import Dot from "@/components/Icons/Dot";
import Logo from "@/components/Logo/white";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#FFFBFB] pt-14">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-3/5 px-4 pr-10 md:w-2/5">
              <div className="flex w-[190px] flex-row md:w-auto md:flex-col lg:mb-16">
                <div>
                  <Link href="/" className={`header-logo`}>
                    <div className="block md:hidden">
                      <Logo width={"187"} height={"42"} />
                    </div>
                    <div className="hidden md:block">
                      <Logo />
                    </div>
                  </Link>
                  <p className="mb-2 mt-7 text-xs font-semibold md:text-base">
                    Connect with Our Specialists
                  </p>
                  <p className="mb-9 text-[10.5px] leading-relaxed text-gray-light md:text-base">
                    Send us your requirements, and we’ll reach out to discuss
                    your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-2/5  flex-col md:ml-0  md:mt-10 md:w-1/5 md:pl-10">
              <h2 className="mb-2 ml-4 mt-0 text-sm text-gray-light md:mb-8 md:ml-0 md:text-xl md:font-bold">
                Quick links
              </h2>
              <div className="mt-2 flex min-w-[140px] flex-col md:mt-0">
                {menuData.map((menuItem) => (
                  <ul key={menuItem.title} className="flex-co mb-2 ml-5 flex">
                    <li className="flex flex-row flex-wrap items-center">
                      <div className="invisible w-0 md:visible md:w-auto">
                        <Dot color={"#B20000"} />
                      </div>
                      <p className="visible w-auto text-primary md:invisible md:w-0">
                        •
                      </p>
                      <Link
                        href={menuItem.path}
                        className={`ml-3 flex text-xs text-primary md:text-base`}
                      >
                        {menuItem.title}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="w-full px-4 md:mt-10 md:w-2/5 md:px-0">
              <div className="mb-2 md:mb-5 lg:mb-16">
                <h2 className="mb-8 text-xl font-bold text-gray-light">
                  Our Offices
                </h2>
                <ul className="flex flex-col">
                  <li className="flex flex-row">
                    <div>
                      <LocationIcon />
                    </div>
                    <p className="ml-3 text-xs text-gray-light md:text-base">
                      Red Breed Ltd., Ludwig-Hofacker-Str. 9, 71672 Marbach,
                      Germany
                    </p>
                  </li>
                </ul>
                <ul className="mt-3 flex flex-col">
                  <li className="flex flex-row">
                    <div>
                      <LocationIcon />
                    </div>
                    <p className="ml-3 text-xs text-gray-light md:text-base">
                      Red Breed Ltd., 218 Bach Dang, ACB Building, Da Nang,
                      Vietnam
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px  bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-gray-light">
              Copyright © 2024 Red Breed Ltd
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
