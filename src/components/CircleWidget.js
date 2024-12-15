import React, { useEffect, useState } from "react";

const CircleWidget = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse move handler
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed flex items-center justify-center w-8 h-8 bg-transparent translate-x-2 translate-y-2 border border-[#357b7b] rounded-full pointer-events-none"
      style={{
        pointerEvents: "none", // Prevents the circle from blocking interactions
        zIndex: 9999, // Ensure it stays on top
        top: `${position.y}px`, // Position of the circle based on mouse
        left: `${position.x}px`, // Position of the circle based on mouse
        transform: "translate(-50%, -50%)", // To center the circle on the mouse
        transition: "top 0.1s ease, left 0.1s ease", // Smooth transition
      }}
    >
      <div
        className="w-[6px] h-[6px] bg-[aqua] rounded-full"
        style={{
          pointerEvents: "none", // Prevent blocking interactions
        }}
      ></div>
    </div>
  );
};

export default CircleWidget;
