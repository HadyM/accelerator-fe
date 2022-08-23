import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
