import React from "react";
import Input from "./Input";

const Category = ({ handleChange }) => {
  return (
    <div className="">
      <h2 className="text-[22px] font-normal mb-[20px]">Category</h2>
      <div className="">
        <label className="sidebar-label-container block relative pl-[35px] mb-[12px] cursor-pointer select-none">
          <input
            className="absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value={""}
            name="radio"
          />
          <span className="absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-lg checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="radio"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="radio"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="radio"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="radio"
        />
      </div>
    </div>
  );
};

export default Category;
