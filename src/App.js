// Librerías usadas por la aplicación
import React from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//Función principal de la aplicación
function App() {
  return (
  <div>
    <Navbar  bg="dark" variant="dark">>
    <Navbar.Toggle />
    <Navbar.Collapse>
    <Nav className="justify-content-end" style={{ width: "100%" }}>
    <Button variant="outline-success">Inicio</Button>
    <ButtonGroup>
    <DropdownButton variant="outline-success" title="Bancos">
      <Dropdown.Item >Informe de Cuentas</Dropdown.Item>
      <Dropdown.Item >Conciliación de Cuentas</Dropdown.Item>
      <Dropdown.Item >Administración de Cuentas</Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item >Agregar Gasto</Dropdown.Item>  
      <Dropdown.Item >Nueva Cuenta</Dropdown.Item>
      <Dropdown.Item >Nueva Cuenta Extraordinaria</Dropdown.Item>
      <Dropdown.Item >Ajuste Cuotas de Mantenimiento</Dropdown.Item>              
    </DropdownButton>
    <DropdownButton variant="outline-success" title="Administración">
      <Dropdown.Item >Administración de espacios</Dropdown.Item>
      <Dropdown.Item >Administración de usuarios</Dropdown.Item>
      <Dropdown.Item >Administración de Personal</Dropdown.Item>
      <Dropdown.Item >Administración de Proveedores</Dropdown.Item>  
      <Dropdown.Item >Administración de bienes privados</Dropdown.Item>
      <Dropdown.Item >Administración de activos</Dropdown.Item>
    </DropdownButton>
    <Button variant="outline-success">Proyectos</Button>
    <Button variant="outline-success">Comunicación</Button>
    <Button variant="outline-success">Gobierno</Button>
    </ButtonGroup>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    <br></br>
    <br></br>
    <br></br>
    <AmplifySignOut />
  </div>
  );
}

// Aplicación por default
export default withAuthenticator(App, true);

