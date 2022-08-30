import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faKitchenSet,
  faSpoon,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Cookbook from "../../assets/images/cookbook.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="Nav-bar">
        <Link className="Logo" to="/">
          <img src={Cookbook} alt="logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/" className="Home">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="recipe-link"
            to="/recipes"
          >
            <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="cookingstyle-link"
            to="/cookingstyles"
          >
            <FontAwesomeIcon icon={faSpoon} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="knife-link"
            to="/knives"
          >
            <FontAwesomeIcon icon={faUtensils} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="potandpan-link"
            to="/potsandpans"
          >
            <FontAwesomeIcon icon={faKitchenSet} color="#4d4d4e" />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
