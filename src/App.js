import { useEffect, useState } from "react";
import "./App.css";
import Quotes from "./components/Quotes";
import quoteData from "./data/data.json";
import Action from "./components/Action";
function App() {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  const [color, setColor] = useState(colors[Math.floor(Math.random() * 12)]);
  const [quotedata, setQuoteData] = useState(
    quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)]
  );
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * 12)]);
    setQuoteData(
      quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)]
    );
  }, []);
  console.log(quoteData);
  function handleQuotes() {
    setColor(colors[Math.floor(Math.random() * 12)]);
    setQuoteData(
      quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)]
    );
  }
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="quote_container">
        <Quotes
          color={color}
          quote={quotedata.quote}
          author={quotedata.author}
        />
        <hr></hr>
        <Action color={color} handleQuotes={handleQuotes} />
      </div>
    </div>
  );
}

export default App;
