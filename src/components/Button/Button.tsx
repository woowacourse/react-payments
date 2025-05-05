import * as S from './Button.styles';
import { ReactNode } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  children?: ReactNode;
  borderRadius?: string;
}

export default function Button({ children, type, borderRadius, onClick }: ButtonProps) {
  return (
    <S.StyledButton autoFocus type={type} onClick={onClick} borderRadius={borderRadius}>
      {children}
    </S.StyledButton>
  );
}
