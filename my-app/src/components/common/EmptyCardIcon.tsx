import { css } from "@emotion/react";

const EmptyCardIcon = () => {
  return (
    <div
      css={css`
        width: 160px;
        height: 100px;
        background: #f5f5f5;
        border: 1px dashed #d9d9d9;
        border-radius: 5px;
      `}
    />
  );
};

export default EmptyCardIcon;
