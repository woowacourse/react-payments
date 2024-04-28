import { ButtonHTMLAttributes } from 'react';
import * as B from './confirmButton.style';
import * as S from '../confirmPage.style';

interface ConfirmButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ConfirmButton({ children, ...props }: ConfirmButtonProps) {
  return (
    <S.ButtonContainer>
      <B.ConfirmButton {...props}>{children}</B.ConfirmButton>
    </S.ButtonContainer>
  );
}
