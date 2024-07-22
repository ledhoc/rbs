import ShareIcon from "@/components/CardVisit/Icons/Share";
import Image from "next/image";
import Link from "next/link";
interface Props {
  color: "bg-primary" | "bg-[#EBF5FF]";
}

const CardVisit = ({ color }: Props) => {
  const textColor = color === "bg-primary" ? "text-white" : "text-gray-light";
  const positionTextColor =
    color === "bg-primary" ? "text-white" : "text-primary";
  return (
    <div className={`flex flex-col rounded-xl ${color || "bg-primary"}`}>
      <div className="mx-4 my-6 flex max-w-[280px] flex-col items-center justify-center">
        <div className="justify-center rounded-[75px]   bg-gradient-to-r from-[#FF3131] to-[#FEE1E1]">
          <Image
            src={"/images/about/girl.png"}
            alt="who-we-are"
            width={150}
            height={150}
            style={{
              padding: 4,
            }}
          />
        </div>
        <p className={`mt-5 text-base ${textColor}`}>Chris Adcock</p>
        <p className={`mt-2 text-sm font-thin ${positionTextColor}`}>
          MANAGING DIRECTOR, TECHNOLOGY
        </p>
        <p className={`mt-3 text-center text-xs font-thin ${textColor}`}>
          Chris has worked at Reed for over 15 years. With most of his career
          focused on IT recruitment, he has opened offices, grown regions...
        </p>
        <div className="f jus mb-4 mt-6 flex flex-row">
          <Link href={""}>
            <button className="mr-2 flex w-[116px] items-center  justify-center rounded-xl bg-white p-2  text-xs  text-primary transition duration-300 ease-in-out hover:bg-opacity-80">
              View Profile
            </button>
          </Link>
          <Link href={""}>
            <button className="ml-2 flex w-[116px] items-center justify-center rounded-xl bg-white p-2  text-xs   text-black transition duration-300 ease-in-out hover:bg-opacity-80">
              LinkedIn
              <div className="ml-2">
                <ShareIcon />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardVisit;
