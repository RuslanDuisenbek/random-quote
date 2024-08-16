import React from "react";
import Button from "../../UI/Button";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as TumnlrSvg } from "../../assets/tumblr.svg";
import "./index.css";
export default function Action({ color, handleQuotes }) {
  function navigateTwitter() {
    window.location.href = "https://twitter.com";
  }
  function navigateTumbler() {
    window.location.href = "https://tumblr.com/";
  }
  return (
    <div className="actions">
      <div className="links">
        <Button handleFunction={navigateTwitter} color={color}>
          <TwitterSvg fill={"white"} width={10} height={10} />
        </Button>
        <Button handleFunction={navigateTumbler} color={color}>
          <TumnlrSvg fill={"white"} width={10} height={10} />
        </Button>
      </div>
      <Button color={color} handleFunction={handleQuotes}>
        New Quote
      </Button>
    </div>
  );
}
