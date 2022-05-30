import React from "react";

import { useNavigate } from "react-router-dom";

export default function CardAdd() {
  const navigation = useNavigate();

  return (
    <div className="card-box">
      <div
        className="add-card-shape"
        onClick={() => {
          navigation("/addCard");
        }}
        aria-hidden="true"
      >
        <div id="cross" />
      </div>
    </div>
  );
}
