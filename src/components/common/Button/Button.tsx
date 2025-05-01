import * as S from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isFixed?: boolean;
}

export default function Button({ children, isFixed = false, ...props }: ButtonProps) {
  return (
    <S.Button isFixed={isFixed} {...props}>
      {children}
    </S.Button>
  );
}
