import type {ComponentPropsWithoutRef} from 'react';
import styled, {css} from 'styled-components';

type ButtonVariant = 'primary' | 'submit' | 'dashed';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant;
};

const Button = ({variant = 'primary', type = 'button', ...props}: ButtonProps) => {
  return <StyledButton type={type} $variant={variant} {...props} />;
};

const VARIANT_STYLES = {
  primary: css`
    background-color: #333333;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
  `,
  submit: css`
    background-color: #000000;
    color: #ffffff;
    border: none;
    border-radius: 0;
    font-size: 14px;
  `,
  dashed: css`
    background-color: transparent;
    color: #8c8c8c;
    border: 1px dashed #e6e6e6;
    border-radius: 5px;
    font-size: 14px;
  `,
};

const StyledButton = styled.button<{$variant: ButtonVariant}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;

  ${({$variant}) => VARIANT_STYLES[$variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default Button;
