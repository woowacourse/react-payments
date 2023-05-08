import { HTMLAttributes } from 'react';
import * as S from './style';

export interface ControlButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

function ControlButton({
  children,
  type,
  disabled,
  onClick,
  ...props
}: ControlButtonProps) {
  return (
    <S.ButtonWrapper>
      <S.RegisterButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </S.RegisterButton>
    </S.ButtonWrapper>
  );
}
export default ControlButton;
