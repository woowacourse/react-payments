import React from "react";
import { colors } from "styles/theme";

interface MessageProps {
  content: string;
  type: "success" | "fail";
}

export default function Message({ content, type }: MessageProps) {
  return (
    <span className="message" style={{ color: colors[type] }}>
      {content}
    </span>
  );
}
