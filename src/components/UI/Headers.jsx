import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [show , setShow] = useState(false)

  const handleButtonToggle = () => {
   return setShow(!show)
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><NavLink to="/" onClick={() => setShow(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setShow(false)}>About</NavLink></li>
              <li><NavLink to="/country" onClick={() => setShow(false)}>Country</NavLink></li>
              <li><NavLink to="contact" onClick={() => setShow(false)}>Contact</NavLink></li>
            </ul>
          </nav>
        <div className="ham-menu">
          <button onClick={handleButtonToggle}>
           <GiHamburgerMenu/>
           </button>
        </div>

        </div>
      </div>
    </header>
  );
};
