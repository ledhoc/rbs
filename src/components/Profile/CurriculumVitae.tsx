import Dot from "@/components/Icons/Dot";
import Image from "next/image";

export default function CurriculumVitae({ profile }) {
  const section = (text: string) => {
    return (
      <div className="my-2 flex flex-row">
        <div className="h-[24px] w-[3px] bg-primary" />
        <p className="ml-3 text-xl font-semibold text-primary">
          {text.toUpperCase()}
        </p>
      </div>
    );
  };

  const dotLine = (isDot?: boolean) => {
    if (isDot) {
      return <Dot color={"#D3D3D3"} />;
    }
    return (
      <svg
        width="9"
        height="58"
        viewBox="0 0 9 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.5" cy="4" r="4" fill="#D3D3D3" />
        <rect x="3.5" y="10.75" width="2" height="47" fill="#D3D3D3" />
      </svg>
    );
  };

  const timeline = () => {
    return (
      <div className="flex flex-row">
        <div>{dotLine()}</div>
        <div>
          
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10 overflow-visible">
      <div>
        <div className="mt-[-75px] flex justify-center">
          <Image
            src={profile?.avatar}
            width={150}
            height={150}
            alt={"avatar-ceo"}
          />
        </div>
      </div>
      <h3 className="mt-4 text-center text-2xl text-primary">
        {profile?.name}
      </h3>
      <p className="text-center text-sm text-black">{profile?.position}</p>
      <div className="max-h-[380px] overflow-scroll px-10">
        <div className="mt-5 rounded-2xl border-[1px] border-[#F0F0F0] p-3">
          {section("ABOUT")}
          <p className="mb-2 text-sm text-gray-light">{profile?.about}</p>
        </div>
        <div className="mt-5 rounded-2xl border-[1px] border-[#F0F0F0] p-3">
          {section("Experience")}
          {timeline()}
        </div>
      </div>
    </div>
  );
}
