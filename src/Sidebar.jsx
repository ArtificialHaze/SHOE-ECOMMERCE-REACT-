import React from "react";
import Category from "./Category";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Price from "./Price";
import Colors from "./Colors";

const Sidebar = ({ handleChage }) => {
  return (
    <>
      <section className="w-[15%] fixed h-[100%] border-r z-[3] flex flex-col items-center">
        <div className="mb-[4rem]">
          <h1 className="text-[3rem] text-rose-400 mt-[1.3rem] font-bold">
            <AiOutlineShoppingCart />
          </h1>
        </div>
        <Category handleChage={handleChage} />
        <Price handleChage={handleChage} />
        <Colors handleChage={handleChage} />
      </section>
    </>
  );
};

export default Sidebar;
