import { HTMLAttributes } from 'react';
import * as S from './style';

interface ControlButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

function ControlButton({
  children, type, disabled, onClick
}: ControlButtonProps) {
  return (
    <S.ButtonWrapper>
      <S.RegisterButton
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </S.RegisterButton>

    </S.ButtonWrapper>
  );
}
export default ControlButton;
