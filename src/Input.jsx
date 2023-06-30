import React from "react";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container block relative pl-[35px] mt-[12px] cursor-pointer select-none">
      <input
        onChange={handleChange}
        type="radio"
        className="absolute opacity-0 cursor-pointer"
        value={value}
        name={name}
      />
      <span
        className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-lg checkmark"
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
