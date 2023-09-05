import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import PizzaLogo from "../Images/pizzaLogo.png";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div className="navBar">
      <div className="leftSide"id={openLinks ? "open" : "close"}>
        <img alt="pizza logo" src={PizzaLogo} />

        <div className="hiddenLinks" >
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={() =>{
          setOpenLinks(!openLinks);
        }}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
