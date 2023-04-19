import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  const { type, children } = props;
  return <button type={type}>{children}</button>;
}
