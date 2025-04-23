import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonStyle } from './Button.style';

type ButtonVariant = 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const Button = (props: ButtonProps) => {
  const { children, variant, ...rest } = props;
  return (
    <button css={[buttonStyle, buttonSize[variant]]} {...rest}>
      {children}
    </button>
  );
};

export { Button };
