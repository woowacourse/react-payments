import React from "react";

export default function CardAdd({ onClick }) {
  return (
    <div className="card-box">
      <div className="add-card-shape" onClick={onClick} aria-hidden="true">
        <div id="cross" />
      </div>
    </div>
  );
}
