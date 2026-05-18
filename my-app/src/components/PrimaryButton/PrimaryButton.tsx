import { css } from "@emotion/react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const PrimaryButton = ({ onClick, children }: Props) => {
  return (
    <button css={primaryButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;

const primaryButtonStyle = css`
  width: 100%;
  height: 52px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
