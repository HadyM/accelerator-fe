import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import cookbook from "../../assets/cookbook.png";
import "./Navbar.scss";

export default function NavBar() {
  return (
    <Nav className="Navbar Theme">
      <Nav.Item className="Logo">
        <Link to="/">
          <img
            src={cookbook}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
      </Nav.Item>
      <Nav.Item>About</Nav.Item>
      <Nav.Item>Contact</Nav.Item>
    </Nav>
  );
}
