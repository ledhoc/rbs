import { BlogSituation } from "@/types/blog";

export default function BlogDataItem({
  item,
  isEnd,
}: {
  item: BlogSituation;
  isEnd: boolean;
}) {
  return (
    <>
      <div className="my-5 flex w-full flex-row">
        <div className="flex w-1/6 flex-col">
          <p className="pr-5 text-2xl font-semibold text-primary lg:text-4xl">
            {item.rowOneValue}
          </p>
          <p className="mt-4 text-base text-gray-light lg:text-[18px]">
            {item.rowOneTitle}
          </p>
        </div>
        <div className="flex w-2/6 flex-col pl-5">
          <p className="text-base text-gray-light lg:text-[18px]">
            {item.rowTwoInfo}
          </p>
        </div>
        <div className="flex w-3/6 flex-col pl-5">
          <p className="text-base font-semibold text-gray-light lg:text-xl">
            {item.rowThreeTitle}
          </p>
          <p className="mt-4 text-justify text-[18px] text-gray-light">
            {item.rowThreeSubTitle}
          </p>
        </div>
      </div>
      {!isEnd && <div className="h-[1px] w-full bg-primary opacity-50" />}
    </>
  );
}
