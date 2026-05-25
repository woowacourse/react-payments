import { css } from "@emotion/react";

const ErrorIcon = () => {
  return (
    <div
      css={css`
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: #353c49;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 32px;
        font-weight: 700;
      `}
    >
      !
    </div>
  );
};

export default ErrorIcon;
