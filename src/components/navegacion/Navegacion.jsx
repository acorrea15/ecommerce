import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import { userContext } from "../context/UserProvider";
import Login from "../login/Login";
import Registro from "../registro/Registro";
import css from "./navegacion.css"

export const Navegador = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const handleCloseRegistro = () => setShowRegistro(false);
  // const {user,logoutUsuario} = userContext(userContext)





  return (
    <>
      <Navbar className="navbar" bg="ligth" expand="lg">
        <Container>
          <Navbar.Brand href="#home">E Commerce 5I</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="dashboard">Sobre nosotros</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
             
                <NavDropdown.Item href="#action/3.3">
                  Electodomésticos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Tecnología y computación
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="botonlogin" variant="outline-success" onClick={() => setShowLogin(true)}>
                Login
              </Button>
              {/* <Button className="botonlogin" variant="outline-success" onClick={() => logoutUsuario()}>
                Cerrar sesión
              </Button> */}
              {/* FALTA LO FUNCIÓN LOGOUT hecha en función de  BASE DE DATOS */}
              {/* Botones combinados con lógica para que aparezcan alternativamente en el navegador según el usuario esté o no logueado:  */}
              {/* {user ? <Button className="botonlogin" variant="outline-success" onClick={() => logoutUsuario()}>
                Cerrar sesión
              </Button> : <Button className="botonlogin" variant="outline-success" onClick={() => setShowLogin(true)}>
                Login
              </Button> } */}
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <p>
            ¿Aun no estas registrado?   {" "}
            <a onClick={() => [setShowLogin(false), setShowRegistro(true)]}>Hacé Click <b>aquí</b></a>{" "}
          </p>
          <Button className="botonlogin" variant="outline-success" onClick={() => setShowLogin(false)}>
            Cerrar
          </Button>{" "}
        </Modal.Footer>
      </Modal>
      <Modal show={showRegistro} onHide={handleCloseRegistro}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registro />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegistro}>
            Cerrar
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Navegacion = () => {
  return (
    <>
      <Navegador />
    </>
  );
};

export default Navegacion;
