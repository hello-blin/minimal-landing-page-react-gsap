import React from "react";
import "./Header.css";
 
function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="menu">
          <ul>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
