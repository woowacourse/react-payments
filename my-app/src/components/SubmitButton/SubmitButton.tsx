import { css } from "@emotion/react";

type SubmitButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SubmitButton = ({ onClick, children }: SubmitButtonProps) => {
  return (
    <button css={SubmitButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default SubmitButton;

const SubmitButtonStyle = css`
  width: 100%;
  height: 52px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
