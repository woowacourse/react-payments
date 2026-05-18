import { css } from "@emotion/react";
const CardListItem = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 69px;
        border-radius: 5px;
        border-width: 1px;
        angle: 0 deg;
        opacity: 1;
        padding: 12px;
        gap: 12px;
        border: 1px solid #f0f0f0;
        display: flex;
        flex-direction: row;
      `}
    >
      <div
        css={css`
          width: 64px;
          height: 40px;
          border-radius: 4px;
          angle: 0 deg;
          opacity: 1;
          background: #ebebeb;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          css={css`
            width: 80px;
            height: 14px;
            border-radius: 3px;
            angle: 0 deg;
            opacity: 1;
            background: #ebebeb;
          `}
        ></div>
        <div
          css={css`
            width: 140px;
            height: 10px;
            border-radius: 3px;
            angle: 0 deg;
            opacity: 1;
            background: #ebebeb;
          `}
        ></div>
        <div
          css={css`
            width: 60px;
            height: 9px;
            border-radius: 3px;
            angle: 0 deg;
            opacity: 1;

            background: #ebebeb;
          `}
        ></div>
      </div>
    </div>
  );
};

export default CardListItem;
