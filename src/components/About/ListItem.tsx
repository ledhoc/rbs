import * as React from "react";
import CheckIcon from "@/components/About/CheckIcon";

interface ListItemProps {
  text: string;
}

const ListItem = ({ text }: ListItemProps) => {
  return (
    <div className="mt-5 flex flex-row">
      <div className="mt-2 md:mt-0">
        <CheckIcon />
      </div>
      <p className="ml-6 text-gray-light">{text}</p>
    </div>
  );
};

export default ListItem;
