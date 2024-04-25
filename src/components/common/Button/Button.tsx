import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  classNames?: string | string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  classNames = [],
  onClick,
}: ButtonProps) {
  const classList = Array.isArray(classNames) ? classNames : [classNames];
  const combinedClassNames = classList.join(" ");
  return (
    <button onClick={onClick} className={combinedClassNames}>
      {children}
    </button>
  );
}
