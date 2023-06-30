import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChage, query }) => {
  return (
    <nav className="border-b flex justify-around items-center p-[20px] z-[999] ml-[2rem]">
      <div className="">
        <input
          className="py-[12px] px-[20px] border-none outline-none relative w-[14rem] bg-[#f7f6f6] mr-[20px] rounded-sm"
          type="text"
          placeholder="Search.."
          onChange={handleInputChage}
          value={query}
        />
      </div>
      <div className="flex justify-around">
        <a href="#">
          <FiHeart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[##888]" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[##888]" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-[1.5rem] h-[1.5rem] ml-[2rem] text-[##888]" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
