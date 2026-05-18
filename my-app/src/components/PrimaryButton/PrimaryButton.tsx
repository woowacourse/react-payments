import { css } from "@emotion/react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const PrimaryButton = ({ onClick, children, disabled }: Props) => {
  return (
    <button css={primaryButtonStyle} onClick={onClick} disabled={disabled}>
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
