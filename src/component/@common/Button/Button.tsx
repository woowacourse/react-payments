import { ButtonHTMLAttributes } from 'react';
import { buttonSize, buttonDefaultStyle, buttonStyle } from './Button.style';
import theme from '../../../styles/theme';

type ButtonVariant = 'large' | 'small';
type ButtonColorVariant = 'black' | 'gray';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  colorVariant?: ButtonColorVariant;
}

const Button = (props: ButtonProps) => {
  const { children, variant, colorVariant = 'black', ...rest } = props;
  return (
    <button
      css={[
        buttonDefaultStyle,
        buttonSize[variant],
        buttonStyle(theme)[colorVariant],
      ]}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
