import { Feature } from "@/types/feature";
import ArrowRight from "../Icons/ArrowRight";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full rounded-2xl bg-white p-4 drop-shadow-sm">
      <div className="wow fadeInUp flex flex-row" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-opacity-10 text-primary">
          {icon}
        </div>
        <div className="ml-4  flex-col">
          <h3 className="mb-5 text-xl font-bold text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <div>{paragraph}</div>
        </div>
      </div>
      <div className="mr-4 mt-2 flex flex-row-reverse">
        <ArrowRight color={"#B20000"} />
      </div>
    </div>
  );
};

export default SingleFeature;
