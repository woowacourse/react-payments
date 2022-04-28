import React from "react";

interface HeaderProps {
  hasBackArrow?: boolean;
  title: string;
}

export default function Header({ hasBackArrow = true, title }: HeaderProps) {
  return (
    <header className="page-header">
      {hasBackArrow && <span className="arrow"></span>}
      <h2 className="page-title">{title}</h2>
    </header>
  );
}
