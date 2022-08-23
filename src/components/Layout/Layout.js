import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
