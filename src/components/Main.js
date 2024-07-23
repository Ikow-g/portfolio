import React from "react";
import { Container } from "react-bootstrap";

const Main = () => {
  const handleMouseEnter = () => {
    document.querySelector(".custom-cursor").classList.add("hovered");
  };

  const handleMouseLeave = () => {
    document.querySelector(".custom-cursor").classList.remove("hovered");
  };

  return (
    <div className="parent-main-container">
      <Container className="main-content"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1>Hi there, I'm Ikow, a...</h1>
        <h2>
          <span>Developer.</span>
          <span>Designer</span>
        </h2>
        <p>muh.djatmieka@gmail.com</p>
      </Container>
    </div>
  );
};

export default Main;
