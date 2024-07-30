import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {
  href?: string;
  colorClass?: string;
}

const ContactButton = ({ href, colorClass }: Props) => {
  return (
    <div className="flex space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Link
        href={href || "/contact"}
        className={`font-regular  rounded-xl ${colorClass ? colorClass : "bg-primary hover:bg-primary/65"}  px-8 py-3 text-base text-white duration-300 ease-in-out `}
      >
        <div className="flex flex-row">
          <p>Contact Us</p>
          <Image
            src="/svgs/arrow-right.svg"
            alt="arrow-right"
            width={17}
            height={13}
            className="ml-3"
          />
        </div>
      </Link>
    </div>
  );
};

export default ContactButton;
