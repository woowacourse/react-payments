import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  hasBackArrow?: boolean;
  title: string;
}

export default function Header({ hasBackArrow = true, title }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="page-header">
      {hasBackArrow && (
        <div className="arrow-wrapper">
          <span className="arrow" onClick={() => navigate(-1)}></span>
        </div>
      )}
      <h2 className="page-title">{title}</h2>
    </header>
  );
}
