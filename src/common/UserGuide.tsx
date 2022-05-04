import React from "react";

export default function UserGuide({ children }: { children: React.ReactNode }) {
  return (
    <div className="user-guide-container">
      <span className="user-guide">?</span>
      <div className="user-guide-content">{children}</div>
    </div>
  );
}
