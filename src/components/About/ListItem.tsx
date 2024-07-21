import * as React from "react";
import CheckIcon from "@/components/About/CheckIcon";
const ListItem = (props) => {
  return (
    <div className="flex flex-row">
      <CheckIcon />
      <p>{props.text}</p>
    </div>
  );
};

export default ListItem;
