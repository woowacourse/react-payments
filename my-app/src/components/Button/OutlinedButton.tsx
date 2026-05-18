import { css } from "@emotion/react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const OutlinedButton = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      css={css`
        width: 100%;
        height: 40px;
        background: transparent;
        color: #8c8c8c;
        border: 1px dashed #e6e6e6;
        border-radius: 5px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      `}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
