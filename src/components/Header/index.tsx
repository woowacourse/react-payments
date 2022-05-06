import React from "react";

export default function Header({ hasBackArrow = true }) {
  return (
    <header className="page-header">
      {hasBackArrow && <span className="arrow"></span>}
      <h2 className="page-title">카드 추가</h2>
    </header>
  );
}
