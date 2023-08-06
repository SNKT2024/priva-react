import React from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  Offcanvas,
  OffcanvasBody,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../css/color.css";
import "../css/main.css";

import "../css/navigation.css";

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" nav " sticky="top">
        <Container className="container">
          <Nav>
            <h3 className="logo">HILUX</h3>
          </Nav>
          <NavbarToggle aria-controls="offcanvas" />
          <Navbar.Offcanvas
            id="offcanvas"
            placement="end"
            className="off-canvas  "
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end ms-auto navbar">
                <NavLink className="navlink">Home</NavLink>
                <NavLink className="navlink">Products</NavLink>

                <NavLink className="navlink">About Us</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
