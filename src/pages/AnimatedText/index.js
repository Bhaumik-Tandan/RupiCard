import React from "react";
import "./index.css";
function AnimatedText() {
  return (
    <div className="animated-text">
      <span>
        <strong>Earn 1% assured cashback</strong> on your spends. Get{" "}
        <strong>5X</strong>
      </span>
      <span>
        <strong>more value than cashback</strong> at the Uni Store. Enjoy
      </span>
      <span>
        round the clock <strong> Whatsapp support</strong>. And its
      </span>
      <span>
        <strong>lifetime free</strong>; no joining fee, no annual charges.
      </span>
      <div className="arrow-container">
        <img src="https://www.uni.cards/images/down_arrow.svg" alt="arrow" />
      </div>
    </div>
  );
}

export default AnimatedText;
