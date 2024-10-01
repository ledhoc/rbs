"use client";

import Decor from "@/components/Contact/Icons/Decor";
import EmailIcon from "@/components/Contact/Icons/Email";
import LocationIcon from "@/components/Contact/Icons/Location";
import PhoneIcon from "@/components/Contact/Icons/Phone";
import { useTheme } from "next-themes";

const contactData = [
  // { id: 1, icon: <PhoneIcon />, text: "0906789098" },
  { id: 2, icon: <EmailIcon />, text: "support@redbreed.tech" },
  {
    id: 3,
    icon: <LocationIcon />,
    text: "Red Breed Ltd. Ludwig-Hofacker-Str. 9  71672 Marbach am Neckar GERMANY",
  },
  {
    id: 4,
    icon: <LocationIcon />,
    text: "Red Breed Ltd. 218 Bach Dang, ACB Building, Phuoc Ninh Ward, Hai Chau District, Danang City, Vietnam",
  },
];

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10  mb-5 flex  flex-1 flex-col  rounded-xl p-4  pb-0 pr-0 md:p-10 ">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-gray-light">
        Contact Information
      </h3>
      <p className="mb-7  pr-11 text-sm leading-relaxed text-[#878787]">
        Whether you are searching for your own new job or have hiring needs for
        your organization, Service Specialists can help. Send us a message to
        get started.
      </p>
      <div className="pr-11">
        {contactData.map(({ id, icon, text }) => {
          return (
            <div key={`${id}`} className="mb-5 flex flex-row">
              <div> {icon}</div>
              <p className="ml-3 text-base  text-gray-light ">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsLatterBox;
