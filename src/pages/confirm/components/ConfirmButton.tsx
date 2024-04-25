import { ButtonHTMLAttributes } from 'react';
import * as B from './confirmButton.style';
import * as S from '../confirmPage.style';

interface ConfirmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function ConfirmButton({ text, ...props }: ConfirmButtonProps) {
  return (
    <S.ButtonContainer>
      <B.ConfirmButton {...props}>{text}</B.ConfirmButton>
    </S.ButtonContainer>
  );
}
