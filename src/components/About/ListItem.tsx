import * as React from "react";
import CheckIcon from "@/components/About/CheckIcon";

interface ListItemProps {
  text: string;
}

const ListItem = ({ text }: ListItemProps) => {
  return (
    <div className="mt-5 flex flex-row">
      <CheckIcon />
      <p className="ml-6 text-gray-light">{text}</p>
    </div>
  );
};

export default ListItem;
