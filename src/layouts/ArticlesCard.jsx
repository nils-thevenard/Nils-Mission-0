import React from "react";
import ankle from "../assets/ankle.jpg";

const ArticlesCard = () => {
  return (
    <div class="p-2">
      <img src={ankle} />

      <div>
        <h5>Knee pain</h5>
      </div>
      <div>
        <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p1>
      </div>
    </div>
  );
};

export default ArticlesCard;
