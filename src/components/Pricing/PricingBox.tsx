import ContactButton from "@/components/Button/ContactButton";
import Contact from "@/components/Contact";
import Link from "next/link";

const PricingBox = (props: {
  price?: string;
  duration?: string;
  packageName: string;
  subtitle?: string;
  children: React.ReactNode;
  isTheBest?: boolean;
  selected?: boolean;
  onClickBox: () => void;
  isPrimaryColor?: boolean;
}) => {
  const {
    packageName,
    subtitle,
    children,
    isTheBest,
    onClickBox,
    selected,
    isPrimaryColor,
  } = props;

  return (
    <div
      onClick={onClickBox}
      className={`flex min-h-[550px] w-full overflow-hidden rounded-2xl border-[1px] ${selected ? "border-primary" : "border-transparent"} drop-shadow-md`}
    >
      <div className="relative z-10 flex flex-col rounded-sm bg-white   shadow-three hover:shadow-one  dark:shadow-two dark:hover:shadow-gray-dark">
        <div
          className={`flex h-[86px] flex-col justify-center px-4 ${selected ? "bg-primary" : "bg-[#FDF6F6]"}`}
        >
          <h4
            className={`mb-2 text-center text-xl font-bold  ${selected ? "text-white" : "text-dark"}`}
          >
            {packageName}
          </h4>
          {isTheBest ? (
            <div
              className={`absolute right-0 top-0 flex h-[33px] items-center overflow-hidden rounded-bl-2xl ${selected ? "bg-white" : "bg-primary"} px-3`}
            >
              <p
                className={`text-center text-xs font-semibold ${selected ? "text-primary" : "text-white"} `}
              >
                {"best seller".toLocaleUpperCase()}
              </p>
            </div>
          ) : null}
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>

        <div className="flex-1 flex-col px-4">{children}</div>

        <div className="mt-7 flex   justify-center border-b  pb-8">
          <ContactButton colorClass={selected ? undefined : "bg-gray-400"} />
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
