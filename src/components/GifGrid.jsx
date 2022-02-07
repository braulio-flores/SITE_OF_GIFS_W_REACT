import React, { useEffect, useState } from "react";
import { getGgifs } from "../helpers/getGifs";
import GifGgridItem from "./GifGgridItem";

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( ()=>{
      getGgifs( category )
        .then( res =>{
            setImages(res);
        })
  }, [category]) 
//EN LAS DEPENDENCIAS ES COMO UN ESTADO, DICE, SI LA DEPENDENCIA, EN ESTE CASO CATEGORIA CAMBIA
//   VA A VOLVERSE A EJECUTAR ESTE ESTADO, ESO ES LO QUE HACE USEEFFFECT

// !EN ESTE GIFGRID USAMOS USE EFFECT EN EL GIFGRID2 UAMOS UN CUSTOM HOOK
  
  
  return (
    <div className="cardGrid">
      <h3>{category}</h3>
      <ol>
          { images.map(img=>{
              return <GifGgridItem img={ img } { ...img } key={ img.id }/>;
          }) }
      </ol>
    </div>
  );
};

export default GifGrid;
