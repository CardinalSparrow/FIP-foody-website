import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import burger_icon from "../Assets/burger_icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FOODY</p>
      </div>
      {/* Burger icon for mobile */}
      <div className="burger-icon" onClick={toggleMobileMenu}>
        <img src={burger_icon} alt="Burger Icon" />
      </div>

      <ul className={`nav-menu ${mobileMenuOpen && "mobile-menu-open"}`}>
        <li>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenu("home")}
          >
            Home {menu === "home" && <hr />}
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenu("about")}
          >
            About {menu === "about" && <hr />}
          </Link>
        </li>
        <li>
          <Link
            to="popular-dishes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenu("menu")}
          >
            Menu {menu === "menu" && <hr />}
          </Link>
        </li>
        <li>
          <Link
            to="ask-question"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            Contact {menu === "contact" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-cart-delivery">
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
