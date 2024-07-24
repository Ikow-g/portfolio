import React from "react";
import { Container } from "react-bootstrap";
// import CustomCursor from "./CustomCursor";

const Main = () => {
  // const handleMouseEnter = () => {
  //   document.querySelector(".custom-cursor").classList.add("visible");
  // };

  // const handleMouseLeave = () => {
  //   document.querySelector(".custom-cursor").classList.remove("visible");
  // };

  return (
    <div className="parent-main-container">
      <Container
        className="main-content"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        {/* <CustomCursor /> */}
        <h1>Hi there, I'm Ikow, a...</h1>
        <h2 className="main-title">
          <span className="developer-text">Developer.</span>
          <span className="designer-text">Designer</span>
        </h2>
        <p>muh.djatmieka@gmail.com</p>
      </Container>
    </div>
  );
};

export default Main;
