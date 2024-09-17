import Link from "next/link";
import Image from "next/image";

const Card = ({ srcImage, alt, onClick, title, subTitle, data }) => {
  const onClickCard = () => {
    onClick(data);
  };
  return (
    <>
      <div className="flex cursor-pointer flex-col" onClick={onClickCard}>
        <div className="aspect-square h-[150px] md:h-[150px] xl:h-[190px] 2xl:h-[220px]">
          <Image src={srcImage} width={224} height={224} alt={alt} />
        </div>
        <p className="mt-5 text-xl text-primary">{title}</p>
        <p className="text-sm">{subTitle}</p>
        <button className="text-sm italic text-primary underline">
          View Profile
        </button>
      </div>
    </>
  );
};

export default Card;
