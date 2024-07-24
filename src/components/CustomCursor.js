import React, { useEffect, useState } from "react";
import "../css/customCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const mainArea = document.querySelector(".main-content");

    if (mainArea) {
      mainArea.addEventListener("mousemove", updatePosition);
      mainArea.addEventListener("mouseenter", handleMouseEnter);
      mainArea.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (mainArea) {
        mainArea.removeEventListener("mousemove", updatePosition);
        mainArea.removeEventListener("mouseenter", handleMouseEnter);
        mainArea.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? 'visible' : 'hidden'}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
};  

export default CustomCursor;
