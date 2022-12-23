import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../registro/Registro";
import Dashboard from "../pages/Dashboard";
import { userContext } from "../context/UserProvider";


const Rutas = () => {

  const {user} = useContext(userContext)
  return (
    <>
      <Routes>
        
        {/* Cuando tenga las siguiente rutas, nos envía al componente home, registro, sobre nosotros etc.  */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* En vez de Dashboard tendría que tener el path de sobre nosotro */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
