import React, { useState } from "react";

export default function UserGuide({ children }: { children: React.ReactNode }) {
  const [isContentShown, setIsContentShown] = useState(false);

  return (
    <div className="user-guide-container">
      <span
        className="user-guide"
        onMouseEnter={() => setIsContentShown(true)}
        onMouseLeave={() => setIsContentShown(false)}
      >
        ?
      </span>
      {isContentShown && <div className="user-guide-content">{children}</div>}
    </div>
  );
}
