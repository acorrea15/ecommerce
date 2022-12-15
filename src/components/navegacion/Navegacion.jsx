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
          <Navbar.Brand href="#home">Proyecto Final</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="dashboard">Sobre nosotros</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <p>
            Aun no estas registrado?{" "}
            <a onClick={() => [setShowLogin(false), setShowRegistro(true)]}>hace Click aqui </a>{" "}
          </p>
          <Button variant="secondary" onClick={() => setShowLogin(false)}>
            Close
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
            Close
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
