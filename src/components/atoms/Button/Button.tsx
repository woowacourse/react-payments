import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ onClick, children, ...props }: Props) {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
}
