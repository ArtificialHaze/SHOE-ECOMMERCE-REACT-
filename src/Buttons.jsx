import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="py-[10px] px-[20px] mr-[6px] bg-transparent border rounded-sm cursor-pointer text-[#323232]"
    >
      {title}
    </button>
  );
};

export default Button;
