import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Punch Man"]);

  return (
    <>
      <h2> GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      {/* <GifGrid categorias={categorias} /> */}
      <ul>
        {categorias.map((cat) => (
          <GifGrid key={cat} categorias={cat} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
