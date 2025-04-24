import * as S from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFixed?: boolean;
  variant?: 'primary' | 'black';
}

export default function Button({ children, isFixed = false, variant = 'primary', ...props }: ButtonProps) {
  return (
    <S.Button isFixed={isFixed} variant={variant} {...props}>
      {children}
    </S.Button>
  );
}
