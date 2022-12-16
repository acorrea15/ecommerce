import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const Login = () => {
  // El useState nos da el estado inicial de los parámetros.  
  // El estado inicial es un string vacío ("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// La función handlesubmit sirve para enviar los datos del formulario. 
// Recibimos un evento y le pasamos la lógica.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "a@a.com" && password === "123456") {
      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Ingreso exitoso",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <>
    {/* Formulario de login: */}
    {/* El onsubmit permite enviar la información. Handlesubmit se utiliza por convención para llamar a esta función.  */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            // El onChange actualiza los parámetros del UseState. Es una función con un evento. 
            // El setEmail sirve para actualizar: le pasamos el evento(e) a escuchar y un valor (que es igual a email)
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Button class="botonlogin" variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
