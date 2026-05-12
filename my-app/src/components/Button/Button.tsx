import { css } from "@emotion/react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      css={css`
        width: 100%;
        background: #333333;
        color: #f3f3f3;
        height: 44px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
      `}
    >
      {children}
    </button>
  );
};

export default Button;
