import { css } from "@emotion/react";

type ButtonPropsType = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  rounded?: boolean;
};

const Button = ({ text, disabled = false, onClick, rounded = false }: ButtonPropsType) => {
  return (
    <button css={buttonStyle(rounded)} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

const buttonStyle = (rounded: boolean) => css`
  width: 100%;
  height: 44px;
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
