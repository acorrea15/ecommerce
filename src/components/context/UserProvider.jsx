import React, {createContext} from 'react'
// createContext es un componente de react que importamos.Guardamos todo en userContext (va a tener todos nuestros datos) 
export const userContext = createContext()

// Traemos children: son todos los datos que yo quiero disponibilizar en otros componentes. 
const UserProvider = ({children}) => {

    const loginUsuario = (email, password) => {
        console.log(email, password)
    }

    return (

        // El user context sirve para pasar los componentes.
        <userContext.Provider>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider