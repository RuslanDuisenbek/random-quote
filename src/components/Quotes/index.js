import "./index.css";
import React from "react";
import { ReactComponent as QuotesSVG } from "../../assets/quotes.svg";
export default function Quotes({ color, quote, author }) {
  return (
    <div className="quotes_container">
      <div className="quote">
        <QuotesSVG fill={color} width={30} height={30} />
        <p className="quote_field" style={{ color: color }}>
          {quote}
        </p>
      </div>
      <p className="authors" style={{ color: color }}>
        -{author}
      </p>
    </div>
  );
}
