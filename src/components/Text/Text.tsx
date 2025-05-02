import React from "react";
import styles from "./Text.module.css";

interface TextProps {
  textType?: string;
  children: React.ReactNode;
}

export default function Text({ textType = "subtitle", children }: TextProps) {
  if (textType === "title") {
    return <h2 className={`${styles["text-title"]}`}>{children}</h2>;
  }

  return <p className={`${styles[`text-${textType}`]}`}>{children}</p>;
}
