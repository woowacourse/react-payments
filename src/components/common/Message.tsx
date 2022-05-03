import React from "react";
import { colors } from "styles/theme";

interface MessageProps {
  children: React.ReactNode;
  type: "success" | "fail";
}

export default function Message({ children, type }: MessageProps) {
  return (
    <span className="message" style={{ color: colors[type] }}>
      {children}
    </span>
  );
}
