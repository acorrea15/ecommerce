import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Registro from "../registro/Registro";
import Dashboard from "../pages/Dashboard";
import { userContext } from "../context/UserProvider";
import NotFound from "../404/NotFound";


const Rutas = () => {

  const {user} = useContext(userContext);
  return (
    <>
      <Routes>
        {/* Hay que definir una página de arribo y diferenciarla de la página home del usuario */}
        {/* Ruta protegida: Si los datos de usuario es correcto (true) nos manda a home, sino a registro */}

        {user ? (<Route path="/" element={<Home />} />) : (<Route path="/registro" element={<Registro />} />) }
        
        {/* Cuando tenga las siguiente rutas, nos envía al componente home, registro, sobre nosotros etc.  */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* En vez de Dashboard tendría que tener el path de sobre nosotro */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Asterisco para que, cuando no exista ninguno de los patch anteriores me mande directamente al 404.  */}
        <Route patch="*" element={<NotFound/>}  />
      </Routes>
      <Routes>
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default Rutas;
