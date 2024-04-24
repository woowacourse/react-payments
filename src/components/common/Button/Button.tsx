import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classes: string;
}

export default function Button({ children, classes }: ButtonProps) {
  return <button className={classes}>{children}</button>;
}
