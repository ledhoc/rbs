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
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#D3D3D3" />
        </svg>
      );
    }
    return (
      <svg
        width="10"
        height="88"
        viewBox="0 0 10 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#D3D3D3" />
        <rect x="4" y="13" width="2" height="75" fill="#D3D3D3" />
      </svg>
    );
  };

  const timeline = () => {
    return profile?.timelines?.map((x, xIndex) => {
      return (
        <div
          key={`${x.id}`}
          className={`mt-5 pt-5 ${xIndex === 0 ? "" : "border-t-[1px]"}`}
        >
          {x.map((y, index) => (
            <div key={`${y.id}`} className="flex flex-row">
              <div className="mt-1.5">
                {index === x.length - 1 ? dotLine(true) : dotLine()}
              </div>
              <div className="ml-3 flex flex-col">
                <p className="text-xl font-semibold text-black">{y.position}</p>
                <p className="mt-2 text-sm  text-black">{y.company}</p>
                <p className="mt-2 text-sm  text-black">{y.fromTo}</p>
                <>
                  {y.description && (
                    <p className="my-2 text-sm  text-black">
                      ❛ {y.description} ❜
                    </p>
                  )}
                </>
              </div>
            </div>
          ))}
        </div>
      );
    });
  };

  const education = () => {
    return profile?.education?.map((x, index) => {
      return (
        <div key={`${x.id}`} className="flex flex-row">
          <div className="mt-1.5">
            {profile?.education?.length === 1 ? dotLine(true) : dotLine()}
          </div>
          <div className="ml-3 flex flex-col">
            <p className="text-xl font-semibold text-black">{x.university}</p>
            <p className="mt-2 text-sm  text-black">{x.department}</p>
            <p className="mt-2 text-sm  text-black">{x.years}</p>
            <>
              {x.description && (
                <p className="my-2 text-sm  text-black">❛ {x.description} ❜</p>
              )}
            </>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="relative z-10 mb-5 overflow-visible">
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
      <div className="max-h-[400px] overflow-scroll px-4 md:px-10">
        <div className="mt-5 rounded-2xl border-[1px] border-[#F0F0F0] p-3">
          {section("ABOUT")}
          <p className="mb-2 text-sm text-gray-light">{profile?.about}</p>
        </div>
        <div className="mt-5 rounded-2xl border-[1px] border-[#F0F0F0] p-3">
          {section("Experience")}
          {timeline()}
        </div>
        <div className="mt-5 rounded-2xl border-[1px] border-[#F0F0F0] p-3">
          {section("Education")}
          {education()}
        </div>
      </div>
    </div>
  );
}
