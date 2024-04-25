import { ButtonHTMLAttributes } from 'react';
import * as S from './button.style';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: CustomButtonProps) {
  return <S.Button {...props}>{text}</S.Button>;
}
