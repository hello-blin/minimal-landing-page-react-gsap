import React, { useRef, useEffect } from "react";
import "./Header.css";

function Header({ timeline }) {
  let logo = useRef(null);
  let menu_items = useRef(null);
  useEffect(() => {
    timeline.from(logo, {
      delay: 0.5,
      duration: 0.5,
      opacity: 0,
      y: 100,
    });
    timeline.from(
      menu_items,
      {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        y: 100,
      },
      "-=.1"
    );
  });
  return (
    <div>
      <div className="header">
        <div className="logo" ref={el => logo = el}>
          LOGO
        </div>
        <div className="menu">
          <ul ref={el => menu_items = el}>
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
