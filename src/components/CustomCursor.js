import React, { useEffect, useState } from "react";
import '../css/customCursor.css';

const CustomCursor = () =>{
    const [position, setPosition] = useState({ x:0, y:0});
    const [isHovered, setHovered] = useState(false);

    useEffect(() => {
        const updatePosition = (event) =>{
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        }

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return(
        <div className={`custom-cursor ${isHovered ? 'hovered' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        </div>
    );
}

export default CustomCursor;