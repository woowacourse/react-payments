import styles from "./Text.module.css";

export type TextType = "title" | "subtitle" | "description" | "error";

interface TextProps {
  textType?: TextType;
  children: string;
}

export default function Text({ textType = "subtitle", children }: TextProps) {
  if (textType === "title") {
    return <h2 className={`${styles["text-title"]}`}>{children}</h2>;
  }

  return <p className={`${styles[`text-${textType}`]}`}>{children}</p>;
}
