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
      <footer className="relative z-10 bg-[#FFFBFB] pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="flex w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 flex w-[190px]  max-w-[360px] flex-row md:w-auto md:flex-col lg:mb-16">
                <div>
                  <Link href="/" className={`header-logo`}>
                    <Logo width={"187"} height={"42"} />
                  </Link>
                  <p className="mb-9 mt-7 text-[10.5px] leading-relaxed text-gray-light md:text-base">
                    We build killer Squarespace sites with our quick and
                    pain-free process
                  </p>
                </div>

                <div className="ml-5 flex flex-col  md:ml-0  md:flex-row">
                  <p className="flex">Quick links</p>
                  <div className="mt-2 flex min-w-[140px] flex-col md:mt-0">
                    {menuData.map((menuItem) => (
                      <ul
                        key={menuItem.title}
                        className="flex-co mb-2 ml-5 flex"
                      >
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
              </div>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
              <div className="mb-2 md:mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-gray-light">
                  Our Offices
                </h2>
                <ul className="flex flex-col">
                  <li className="flex flex-row">
                    <div>
                      <LocationIcon />
                    </div>
                    <p className="ml-3 text-xs text-gray-light md:text-base">
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
                    <p className="ml-3 text-xs text-gray-light md:text-base">
                      Ground Floor, Suite C-D, The Maltsters, Wetmore Road,
                      Burton-on-trent, Staffordshire, DE14 1LS
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px  bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-gray-light">
              Copyright © 2024 Red Breed
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
