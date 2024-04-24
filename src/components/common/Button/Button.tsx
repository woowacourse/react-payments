import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classes: string;
  onClick?: () => void;
}

export default function Button({ children, classes, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
