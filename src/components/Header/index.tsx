import React from "react";

import { useNavigate } from "react-router-dom";

export default function Header({ hasBackArrow = true }) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      {hasBackArrow && (
        <span
          className="arrow"
          onClick={() => {
            navigate("/");
          }}
          aria-hidden
        ></span>
      )}
      <h2 className="page-title">카드 추가</h2>
    </header>
  );
}
