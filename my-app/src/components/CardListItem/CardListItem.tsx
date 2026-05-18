import { css } from "@emotion/react";
import { getCardColor } from "../../constants/cardCompanies";

type Props = {
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const CardListItem = ({ issuerCode, number, expirationDate }: Props) => {
  const color = getCardColor(issuerCode);

  return (
    <div
      css={css`
        width: 100%;
        height: 69px;
        border-radius: 5px;
        padding: 12px;
        gap: 12px;
        border: 1px solid #f0f0f0;
        display: flex;
        flex-direction: row;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 64px;
          height: 40px;
          border-radius: 4px;
          background: ${color};
          flex-shrink: 0;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2px;
        `}
      >
        <span
          css={css`
            font-size: 14px;
            font-weight: 700;
          `}
        >
          {issuerCode}
        </span>
        <span
          css={css`
            font-size: 12px;
            color: #333;
          `}
        >
          {number}
        </span>
        <span
          css={css`
            font-size: 11px;
            color: #888;
          `}
        >
          {expirationDate}
        </span>
      </div>
    </div>
  );
};

export default CardListItem;
