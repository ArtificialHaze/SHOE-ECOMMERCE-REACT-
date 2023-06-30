import React from "react";
import Buttons from "./Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="ml-[20rem] mb-[20px] mt-[20px] text-[20px]">
          Recommended Products
        </h2>
        <div className="flex ml-[20rem]">
          <Buttons value="" title="All products" onClickHandler={handleClick}>
            All
          </Buttons>
          <Buttons value="Nike" title="Nike" onClickHandler={handleClick}>
            Nike
          </Buttons>
          <Buttons value="Adidas" title="Adidas" onClickHandler={handleClick}>
            Adidas
          </Buttons>
          <Buttons value="Puma" title="Puma" onClickHandler={handleClick}>
            Puma
          </Buttons>
          <Buttons value="Vans" title="Vans" onClickHandler={handleClick}>
            Vans
          </Buttons>
        </div>
      </div>
    </>
  );
};

export default Recommended;
