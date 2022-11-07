import React, { useRef, useEffect } from "react";
import "./Header.css";
import { RiShoppingBag2Line } from "react-icons/ri";

function Header({ timeline }) {
  let logo = useRef(null);
  let menu_items = useRef(null);
  let icon = useRef(null);
  useEffect(() => {
    timeline.from(logo, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: 100,
    });
    timeline.from(icon, {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: 100,
    });
    timeline.from(
      menu_items,
      {
        delay: 0.5,
        duration: 0.4,
        opacity: 0,
        y: 100,
      },
      "-=.5"
    );
  });
  return (
    <div>
      <div className="header">
        <div className="logo" ref={(el) => (logo = el)}>
          REYNA
        </div>
        <div className="menu">
          <ul ref={(el) => (menu_items = el)}>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="cart" ref={(el) => (icon = el)}>
          <RiShoppingBag2Line
            size={25}
           className="header-icon"></RiShoppingBag2Line>
        </div>
      </div>
    </div>
  );
}

export default Header;
