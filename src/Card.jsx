import React from "react";
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card m-[20px] border p-[20px] cursor-pointer">
        <img src={img} alt={title} className="card-img w-[13rem] mb-[1rem]" />
        <div className="card-details">
          <h3 className="card-title mb-[1rem]">{title}</h3>
          <section className="card-reviews mb-[1rem] flex">
            {star} {star} {star} {star}
            <span className="total-reviews text-[0.9rem] ml-[10px]">
              {reviews}
            </span>
          </section>
          <section className="card-price flex justify-between items-center">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="text-[#535353]" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
