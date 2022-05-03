import React, { useState } from "react";

export default function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="tooltip-container">
      <span className="tooltip">?</span>
      <div className="tooltip-content">{children}</div>
    </div>
  );
}
