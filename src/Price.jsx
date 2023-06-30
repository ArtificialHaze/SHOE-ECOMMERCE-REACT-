import React from "react";
import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <div className="">
      <h2 className="mb-[1rem] text-[22px] font-normal">Price</h2>
      <label className="sidebar-label-container block relative pl-[35px] mb-[12px] cursor-pointer select-none">
        <input
          onChange={handleChange}
          value={""}
          className="absolute opacity-0 cursor-pointer"
          type="radio"
          name={"radio"}
        />
        <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-lg checkmark"></span>{" "}
        All
      </label>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="radioOne"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="radioOne"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="radioOne"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="radioOne"
      />
    </div>
  );
};

export default Price;
