import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div>
      <header>
        <div className="logo">LOGO</div>
        <nav className="nav">
          <ul>    
           <li><a href="#">Home</a></li>
           <li><a href="#">Category</a></li>
           <li><a href="#">About Us</a></li>
           <li><a className="cont" href="#">Contact Us </a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
