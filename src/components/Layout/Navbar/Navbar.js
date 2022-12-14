import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faSpoon,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Cookbook from "../../../assets/images/cookbook.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="Nav-bar">
        <Link className="Logo" to="/">
          <img src={Cookbook} alt="logo" />
        </Link>
        <nav>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            className="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="recipe-link"
            to="/recipes"
          >
            <FontAwesomeIcon icon={faBook} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="cookingstyle-link"
            to="/cookingstyles"
          >
            <FontAwesomeIcon icon={faSpoon} />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="signin-link"
            to="/signin"
          >
            <FontAwesomeIcon icon={faSignIn} />
          </NavLink>
          <div>
            <Dropdown className="d-inline mx-2" autoClose="inside">
              <Dropdown.Toggle
                className="DropDownMenu"
                id="dropdown-autoclose-inside"
              >
                Info
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="DropDownMenuItems" href="/knives">
                  Knives
                </Dropdown.Item>
                <Dropdown.Item
                  className="DropDownMenuItems"
                  href="/potsandpans"
                >
                  Pots & Pans
                </Dropdown.Item>
                <Dropdown.Item
                  className="DropDownMenuItems"
                  href="/cuttingstyles"
                >
                  Cutting Styles
                </Dropdown.Item>
                <Dropdown.Item
                  className="DropDownMenuItems"
                  href="recipes/newrecipe"
                >
                  Add New Recipe
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
