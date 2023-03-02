import React from "react";

const PreviousIcon = ({ fillColor, width, height }) => {
  return (
    <svg
      width={width ? width : "81"}
      height={height ? height : "81"}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={fillColor}
    >
      <circle cx="40.5" cy="40.5" r="40" stroke="black" />
      <path d="M48 56L32 40L48 24" stroke="black" strokeWidth="3" />
    </svg>
  );
};

export default PreviousIcon;
