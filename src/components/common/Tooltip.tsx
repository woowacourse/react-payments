import React, { useState } from "react";

export default function Tooltip({ children }: { children: React.ReactNode }) {
  const [isContentShown, setIsContentShown] = useState(false);

  return (
    <div className="tooltip-container">
      <span
        className="tooltip"
        onMouseEnter={() => setIsContentShown(true)}
        onMouseLeave={() => setIsContentShown(false)}
      >
        ?
      </span>
      {isContentShown && <div className="tooltip-content">{children}</div>}
    </div>
  );
}
