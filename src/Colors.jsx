import React from "react";
import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <div className="mt-[0.75rem] ml-[-2rem]">
      <h2 className="text-[22px] font-normal">Colors</h2>
      <label className="sidebar-label-container block relative pl-[35px] mt-[12px] cursor-pointer select-none">
        <input
          onChange={handleChange}
          className="absolute opacity-0 cursor-pointer"
          type="radio"
          value={""}
          name="radioOne"
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-lg checkmark"></span>{" "}
        All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="radio"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="radio"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="radio"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="radio"
        color="green"
      />
      <label className="sidebar-label-container block relative pl-[35px] mt-[12px] cursor-pointer select-none">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="radio"
        />
        <span
          className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-lg checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
