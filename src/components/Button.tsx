import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styled, { CSSProp, css } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonStyle: CSSProp;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

const S = {
  Button: styled.button<{ ButtonStyle: CSSProp }>`
    cursor: pointer;

    ${(props) => props.ButtonStyle}
  `,
};

export const AddButton = css`
  width: 208px;
  height: 123px;
  margin: 42px 0 40px;
  font-size: 34px;
  background: var(--gray-color-100);
  border-radius: 5px;
`;

export const NextButton = css`
  display: flex;
  margin: 38px 0 0 auto;
  padding: 10px 16px;
  color: var(--darken-color);
  border: 1px solid var(--darken-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  background: none;

  &:disabled {
    opacity: 0.5;
  }
`;

export const CloseButton = css`
  grid-area: 3 / 1 / auto / 5;
  width: 100%;
  position: fixed;
  bottom: 32px;
  padding: 12px 0;
  font-size: 14px;
  border: 1px solid var(--darken-color);
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: #fefefe;
    color: var(--label-color);
    border: 1px solid var(--label-color);
    transform: scale(1.014);
  }

  &:active {
    position: fixed;
    bottom: 26px;
    padding: 14px 0;
  }
`;

export default Button;
