import React from "react";

const NextIcon = ({ fillColor, width, height }) => {
  return (
    <svg
      width={width ? width : "81"}
      height={height ? height : "81"}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={fillColor}
    >
      <circle
        cx="40.5"
        cy="40.5"
        r="40"
        transform="matrix(-1 0 0 1 81 0)"
        stroke="black"
      />
      <path d="M33 56L49 40L33 24" stroke="black" strokeWidth="3" />
    </svg>
  );
};

export default NextIcon;
