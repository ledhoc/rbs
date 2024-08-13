import React, { MouseEventHandler } from "react";
interface Props {
  colorClass?: string;
  title: string;
  onClick: (id: string) => void;
  id: string;
}

const Button = ({ colorClass, title, onClick, id }: Props) => {
  const onClickButton = () => {
    onClick(id);
  };
  return (
    <div
      className="flex cursor-pointer space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
      onClick={onClickButton}
    >
      <div
        className={`font-regular  rounded-xl ${colorClass ? colorClass : "bg-primary hover:bg-primary/65"}  px-8 py-2 text-base text-white duration-300 ease-in-out `}
      >
        <div className="flex flex-row">
          <p
            className={
              colorClass ? "text-primary hover:text-white" : "text-white"
            }
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;
