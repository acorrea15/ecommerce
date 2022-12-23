import React, { createContext, useState } from "react";
// createContext es un hook de react que importamos. Guardamos todo en userContext (va a tener todos nuestros datos)
// Esos datos se exportan para importarse posteriormente dentro del return
export const userContext = createContext();

// Este archivo es el proveedor de datos. En este caso los datos de usuario.
// La función UserProvider es nuestro componente que posteriormente exportamos al final del código.
// Traemos children: son props: datos que yo quiero disponibilizar en otros componentes.
const UserProvider = ({ children }) => {
  // creación de un state para los usuarios:
  const [user, setUser] = useState("");

  const loginUsuario = (email, password) => {
    //    Creación de un objeto con los datos de usuario. Función que permite guardar los datos del usuario. Estos datos se guardan
    // En el SetUser
    const registroUser = {
      email,
      password,
    };
    setUser(registroUser);
    // Creación de local storage para almacenar los usuarios porque éstos no están almacenados en una base de datos: 
    localStorage.setItem("registroUser"), JSON.stringify(registroUser)
  };

  return (
    // El provider es el proveedor. Aquí ponemos los datos que queremos pasar. Disponibilizamos los children dentro
    // del componente userContext.Provider. No hace falta poner props x props (usuario, pass, etc) con poner children pasa todos los datos.
    // Dentro de la etiqueta value van los datos que compartimos/disponibilizamos: en este caso los usuarios y la función loginUsuario
    // Con lo siguiente decimos: userContext es nuestro proveedor de datos.
    <userContext.Provider value={{ user, loginUsuario }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
