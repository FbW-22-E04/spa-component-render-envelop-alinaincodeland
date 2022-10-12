import React from "react";
import Image from "../image/s-l500.jpg";
import "./Envelope.css";

function Envelope(props) {
  return (
    <div className="container">
      <div className="header-top">
        <div>
          <p>{props.sender}</p>
          {props.senderAddress}
        </div>
        <div className="img-container">
          <img src={Image} alt="" />
        </div>
      </div>
      <div>
        <p>{props.receiver}</p>
      </div>
    </div>
  );
}

export default Envelope;
