import React from "react";

const GifGgridItem = ({ id, title, image }) => {
  return (
    <div className="card animate__animated animate__fadeInDown">
      <img src={ image } alt={ title } />
      <p>{ title }</p>
    </div>
  );
};

export default GifGgridItem;
