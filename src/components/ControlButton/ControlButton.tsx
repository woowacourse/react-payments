import { HTMLAttributes } from 'react';
import * as S from './style';

interface ControlButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  onClick?: () => void;
  label: string;
}
function ControlButton({
  type, disabled, onClick, label
}: ControlButtonProps) {
  return (
    <S.ButtonWrapper>
      <S.RegisterButton
        disabled={disabled}
        type={type}
        onClick={() => onClick && onClick()}
      >
        {label}
      </S.RegisterButton>
    </S.ButtonWrapper>
  );
}
export default ControlButton;
