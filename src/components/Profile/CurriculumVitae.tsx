import Image from "next/image";

export default function CurriculumVitae({ profile }) {
  const section = () => {};
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
        <div className="border-[1px] border-[#F0F0F0] p-3">
          <p className="mb-6 text-gray-light">{profile?.about}</p>
        </div>
      </div>
    </div>
  );
}
