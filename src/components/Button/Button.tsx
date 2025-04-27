import { css } from "@emotion/react";
import { ButtonProps } from "../../types/componentPropsType";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button css={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

const buttonStyle = css`
  width: 100%;
  height: 44px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #333;
  border: none;
  box-sizing: border-box;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
