import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found flex-column-center">
      <div className="not-found-description">유효한 페이지가 아니에요!</div>
      <button className="not-found-redirect-button" onClick={() => navigate("/")}>
        Redirect to Home
      </button>
    </div>
  );
}
