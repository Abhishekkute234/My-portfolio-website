// components/Cursor.js
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        width: "20px",
        height: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 1000,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Cursor;
