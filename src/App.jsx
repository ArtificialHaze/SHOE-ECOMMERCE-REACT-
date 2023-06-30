import React, { useState } from "react";
import "./App.css";
import { Recommended, Nav, Products, Sidebar, Card } from "./importExports";
import products from "./data";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChage = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChage = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          reviews={reviews}
          star={star}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };

  const results = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChage={handleChage} />
      <Nav query={query} handleInputChage={handleInputChage} />
      <Products results={results} />
      <Recommended handleClick={handleClick} />
    </>
  );
};

export default App;
