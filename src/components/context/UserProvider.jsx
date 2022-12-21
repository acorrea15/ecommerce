import React, {createContext} from 'react'
// createContext es un hook de react que importamos. Guardamos todo en userContext (va a tener todos nuestros datos) 
// Esos datos se exportan para importarse posteriormente dentro del return
export const userContext = createContext()



// Este archivo es el proveedor de datos. En este caso los datos de usuario. 
// La función UserProvider es nuestro componente que posteriormente exportamos al final del código. 
// Traemos children: son props: datos que yo quiero disponibilizar en otros componentes. 
const UserProvider = ({children}) => {

    const loginUsuario = (email, password) => {
        console.log(email, password)
    }

    return (

        // El provider es el proveedor. Aquí ponemos los datos que queremos pasar. Disponibilizamos los children dentro 
        // del componente userContext.Provider. No hace falta poner props x props (usuario, pass, etc) con poner children pasa todos los datos. 
        // Con lo siguiente decimos: userContext es nuestro proveedor de datos.   
        <userContext.Provider >
            {children}
        </userContext.Provider>
    )
}

export default UserProvider