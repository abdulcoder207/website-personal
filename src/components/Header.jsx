import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Website Personal</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#words">Words</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
