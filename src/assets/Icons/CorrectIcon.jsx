import React from "react";

const CorrectIcon = ({ fillColor, width, height }) => {
  return (
    <svg
      width={width ? width : "202"}
      height={height ? height : "202"}
      viewBox="0 0 202 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={fillColor}
    >
      <path
        d="M202 101C202 156.777 156.777 202 101 202C45.2228 202 0 156.777 0 101C0 45.2228 45.2228 0 101 0C156.777 0 202 45.2228 202 101Z"
        fill="#4CAF50"
        fillOpacity="0.25"
      />
      <path
        d="M183.5 101C183.5 146.561 146.561 183.5 101 183.5C55.4394 183.5 18.5 146.561 18.5 101C18.5 55.4394 55.4394 18.5 101 18.5C146.561 18.5 183.5 55.4394 183.5 101Z"
        fill="#4CAF50"
      />
      <path
        d="M144.733 62.2332L88.625 118.321L65.5168 95.2291L53.9791 106.767L88.625 141.429L156.267 73.7709L144.733 62.2332Z"
        fill="#CCFF90"
      />
    </svg>
  );
};

export default CorrectIcon;
