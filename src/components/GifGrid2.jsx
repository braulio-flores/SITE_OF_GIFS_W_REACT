import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from './GifGgridItem';

const GifGrid2 = ({ category }) => {
  const { data:images, loading } = useFetchGifs( category );
  //   AQUI ESTAMOS USANDO UN CUSTUM HOOK

//   data:loading significa que renombra
  return (
    <div className="cardGrid">
      <h3>{category}</h3>
      { loading && 'Loading...'}
      <ol>
          { images.map(img=>{
              return <GifGridItem img={ img } { ...img } key={ img.id }/>
          }) }
      </ol>
    </div>
  );
};

export default GifGrid2;
