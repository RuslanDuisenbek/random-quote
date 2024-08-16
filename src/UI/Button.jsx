import React from "react";
import "./style.css";
export default function Button({ children, handleFunction, color, style }) {
  return (
    <button
      onClick={handleFunction}
      style={{ backgroundColor: color, ...style }}
      className="button"
      formTarget="_blank"
    >
      {children}
    </button>
  );
}
