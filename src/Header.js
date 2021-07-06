import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
        <Navbar bg="transparent" variant="transparent" expand="lg" sticky="top">
        <Navbar.Brand variant="outline-info">
        <img width="70px" height="auto" className="img-responsive" src={process.env.PUBLIC_URL + '/HOOD2.png'}  alt="HOOD2" />
        <span class="navbar-brand">&nbsp;&nbsp;Portal Calli</span>
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Button variant="outline-info">Inicio</Button>
        <ButtonGroup>
        <DropdownButton variant="outline-info" title="Bancos">
          <Dropdown.Item >Informe de Cuentas</Dropdown.Item>
          <Dropdown.Item >Conciliación de Cuentas</Dropdown.Item>
          <Dropdown.Item >Administración de Cuentas</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item >Agregar Gasto</Dropdown.Item>  
          <Dropdown.Item >Nueva Cuenta</Dropdown.Item>
          <Dropdown.Item >Nueva Cuenta Extraordinaria</Dropdown.Item>
          <Dropdown.Item >Ajuste Cuotas de Mantenimiento</Dropdown.Item>              
        </DropdownButton>
        <DropdownButton variant="outline-info" title="Administración">
          <Dropdown.Item >Administración de espacios</Dropdown.Item>
          <Dropdown.Item >Administración de usuarios</Dropdown.Item>
          <Dropdown.Item >Administración de Personal</Dropdown.Item>
          <Dropdown.Item >Administración de Proveedores</Dropdown.Item>  
          <Dropdown.Item >Administración de bienes privados</Dropdown.Item>
          <Dropdown.Item >Administración de activos</Dropdown.Item>
        </DropdownButton>
        <Button variant="outline-info">Proyectos</Button>
        <Button variant="outline-info">Comunicación</Button>
        <Button variant="outline-info">Gobierno</Button>
        </ButtonGroup>
        </Nav>
        </Navbar> )
    }
}