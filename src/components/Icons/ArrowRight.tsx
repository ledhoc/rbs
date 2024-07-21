import * as React from "react";
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color || "#fff"}
      d="m20 12 .707-.707.707.707-.707.707L20 12ZM5 13a1 1 0 1 1 0-2v2Zm9.707-7.707 6 6-1.414 1.414-6-6 1.414-1.414Zm6 7.414-6 6-1.414-1.414 6-6 1.414 1.414ZM20 13H5v-2h15v2Z"
    />
  </svg>
);
export default ArrowRight;
