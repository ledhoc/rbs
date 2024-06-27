import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-gray-500 bg-opacity-10 text-red-500">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <div className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
