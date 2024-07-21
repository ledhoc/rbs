import * as React from "react";
const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#B20000"
        strokeLinecap="round"
        strokeWidth={2.662}
        d="M2.242 12.918c1.338.787 5.997 11.005 7.592 9.12 5.275-7.345 7.493-12.226 11.93-19.768"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CheckIcon;
