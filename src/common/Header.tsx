import React from "react";

import { useNavigate } from "react-router-dom";

export default function Header({ hasBackArrow = true, pageTitle }) {
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
      <h2 className="page-title">{pageTitle}</h2>
    </header>
  );
}
