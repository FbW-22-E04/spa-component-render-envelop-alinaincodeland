import React from "react";
import Envelope from "./components/Envelope";

export default function App() {
  const senderName = "Alina";
  const receiverName = "Daniel";

  const senderAddress = (
    <>
      <p>123 Fake Str</p>
      <p>Boston, MA 0218</p>
    </>
  );

  const receiverAddress = (
    <>
      <p>123 Fake Str</p>
      <p>Boston, MA 0218</p>
    </>
  );

  return (
    <div>
      <Envelope
        sender={senderName}
        receiver={receiverName}
        senderAddress={senderAddress}
        receiverAddress={receiverAddress}
      />
    </div>
  );
}
