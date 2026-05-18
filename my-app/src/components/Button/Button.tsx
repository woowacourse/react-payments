import { css } from "@emotion/react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Props = { isActivate?: boolean } & ButtonProps;

const Button = ({ isActivate = true, children, ...props }: Props) => {
  return (
    <button
      {...props}
      css={css`
        width: 100%;
        background: ${isActivate ? "#333333" : "#F7F7F7"};
        color: #f3f3f3;
        height: 44px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
        cursor: ${isActivate ? "pointer" : "default"};

        border: ${isActivate ? "none" : " 1px dashed #F0F0F0"};
      `}
    >
      {children}
    </button>
  );
};

export default Button;
