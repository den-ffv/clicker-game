import React from "react";
import UpLevel from "../components/UpLevel/UpLevel";

function Store() {
  const balans = "1k";

  return (
    <div className="levels">
      <h1>Store</h1>
      <p>Balans: {balans}</p>
      <div className="levels-content">
        <UpLevel />
        <UpLevel />
        <UpLevel />
        <UpLevel />
        <UpLevel />
        <UpLevel />
        <UpLevel />
        <UpLevel />
      </div>
    </div>
  );
}

export default Store;
