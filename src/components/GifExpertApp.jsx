import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid2 from "./GifGrid2";

const GifExpertApp = () => {
  //   let categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState([
    "Dogs", "One Punch"
  ]);


  return (
    <>
      <h2>GifExpertApp</h2>
      <p>Here you have a site built using REACT. I´ve use an API to show the differents GIFTS you can have, this also are used by Whatsapp and Fb for example.
        <br /> Write a keyword in the field and you'll have 20 differents gits accordign the word you wrote.
      </p>
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
