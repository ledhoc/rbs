import * as React from "react";
const Dot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <circle cx={4} cy={4} r={4} fill={props.color || "#B20000"} />
  </svg>
);
export default Dot;
