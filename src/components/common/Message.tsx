import React from "react";

const colorTag = {
  success: "#78e08f",
  fail: "tomato",
};

interface MessageProps {
  content: string;
  type: "success" | "fail";
}

export default function Message({ content, type }: MessageProps) {
  return (
    <span className="message" style={{ color: colorTag[type] }}>
      {content}
    </span>
  );
}
