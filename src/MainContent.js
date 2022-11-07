import React from "react";
import "./MainContent.css";
import Background from "./images/background.jpeg";

export default function MainContent() {
  return (
    <div>
      <div className="content">
        <h1>Shop Now*</h1>
        <p>New Arrivals</p>
      </div>
      <img src={Background} alt="the background" />
    </div>
  );
}