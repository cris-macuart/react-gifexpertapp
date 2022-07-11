import React from "react";
import { useFetchGif } from "../hook/useFetchGif";
import { GifGridItem } from "./GifGridItem";
import { Loader } from "./Loader";

//TODO Sigue 'Generando el build de producción y despliegues en
// GitHub Pages'

export const GifGrid = ({ categorias }) => {
  const { data:imagenes, loading } = useFetchGif(categorias);

  return (
    <>
      {loading && <Loader />} 
      <h3>{categorias}</h3>
      <div className="ui cards">
        {imagenes.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
