import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid2 from "./GifGrid2";

const GifExpertApp = () => {
  //   let categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "Dogs"
  ]);


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = { setCategories } />
      <ol>
        {categories.map((item) => {
          return <GifGrid2 key={item} category={item}/>
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
