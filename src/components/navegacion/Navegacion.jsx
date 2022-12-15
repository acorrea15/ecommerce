import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import Login from "../login/Login";
import Registro from "../registro/Registro";

export const Navegador = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const handleCloseRegistro = () => setShowRegistro(false);


  return (
    <>
      <Navbar bg="ligth" expand="lg">
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
              <Button variant="outline-success" onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registro de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <p>
            ¿Aun no estas registrado?   {" "}
            <a onClick={() => [setShowLogin(false), setShowRegistro(true)]}>Hacé Click <b>aquí</b></a>{" "}
          </p>
          <Button variant="secondary" onClick={() => setShowLogin(false)}>
            Cerrar
          </Button>{" "}
        </Modal.Footer>
      </Modal>
      <Modal show={showRegistro} onHide={handleCloseRegistro}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
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
