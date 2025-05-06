import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonPropsType = {
  children: ReactNode;
  rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, disabled = false, onClick, rounded = false, ...rest }: ButtonPropsType) => {
  return (
    <button css={buttonStyle(rounded)} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

const buttonStyle = (rounded: boolean) => css`
  width: 100%;
  min-height: 44px;
  height: fit-content;
  background-color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  ${rounded ? "border-radius: 4px;" : ""}
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #555555;
  }

  &:active {
    background-color: gray;
  }
`;
