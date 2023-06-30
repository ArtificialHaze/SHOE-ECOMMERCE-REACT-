import React from "react";

const Products = ({ results }) => {
  return (
    <>
      <section className="flex flex-wrap ml-[20rem] mt-[2rem] z-[-2]">
        {results}
      </section>
    </>
  );
};

export default Products;
