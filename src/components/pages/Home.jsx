import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Carrusel from "../carrusel/Carrusel";
import Navegacion from "../navegacion/Navegacion";
import Tarjetas from "../tarjetas/Tarjetas";
import Tabla from "../tabla/Tabla";

const Home = () => {
  

  

  return (
    <>
      <Navegacion />

      
      {/* <Carrusel /> */}
      <Tarjetas />
      {/* <Tabla /> */}
      {/* <h1>Titulo Original</h1>
      <Button> Cambiar el titulo</Button> */}
    </>
  );
};

export default Home;
