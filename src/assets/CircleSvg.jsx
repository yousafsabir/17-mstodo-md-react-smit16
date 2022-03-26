import React from "react";

function CircleSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      fill="#444"
      viewBox="0 0 256 256"
    >
      <rect width={props.width} fill="none"></rect>
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#444"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      ></circle>
    </svg>
  );
}

export default CircleSvg;
