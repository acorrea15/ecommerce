import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../registro/Registro";
import Dashboard from "../pages/Dashboard";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* En vez de Dashboard tendría que tener el path de sobre nosotros */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
