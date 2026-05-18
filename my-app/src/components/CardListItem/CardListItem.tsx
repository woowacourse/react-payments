import { css } from "@emotion/react";
import { getCardColor } from "../../constants/cardCompanies";

type Props = {
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const CardListItem = ({ issuerCode, number, expirationDate }: Props) => {
  const color = getCardColor(issuerCode);
  const maskCardNumber = (number: string) => {
    const parts = number.split(" ");
    return parts
      .map((part, i) => (i === 0 || i === parts.length - 1 ? part : "*".repeat(part.length)))
      .join(" ");
  };

  return (
    <div
      css={css`
        width: 100%;
        height: 73px;
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
          gap: 4px;
          flex: 1;
        `}
      >
        <span
          css={css`
            font-size: 14px;
            font-weight: 700;
            color: #353c49;
          `}
        >
          {issuerCode}
        </span>
        <span
          css={css`
            font-weight: 400;
            font-size: 11px;
            color: #8c8c8c;
          `}
        >
          {maskCardNumber(number)}
        </span>
        <span
          css={css`
            font-size: 9.5px;
            font-weight: 400;
            color: #8c8c8c;
          `}
        >
          유효기간 {expirationDate}
        </span>
      </div>
      <button
        css={css`
          width: 30px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c8c8c;
          font-weight: 400;
          font-size: 16px;
          background: none;
          border: none;
          cursor: pointer;
        `}
      >
        ✕
      </button>
    </div>
  );
};

export default CardListItem;
