import { css } from "@emotion/react";
import type { CardInfo } from "../../types";
import masterLogo from "../../assets/masterLogo.png";
import visaLogo from "../../assets/visaLogo.png";

const fixedCardNumberStyle = css`
  display: inline-block;
  min-width: 30px;
  font-family: "Inter";
`;

const Card = ({ cardInfo, brand }: { cardInfo: CardInfo; brand: string }) => {
  return (
    <div
      css={css`
        width: 212px;
        height: 132px;
        border-radius: 4px;
        background-color: #333333;
        box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
        padding: 8px 12px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      `}
    >
      {/* 로고랑, IC칩 */}
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            background-color: #ddcd78;
            width: 36px;
            height: 22px;
            border-radius: 4px;
          `}
        ></div>
        {brand && (
          <img
            alt="카드 브랜드 이미지"
            css={css`
              width: 36px;
              height: 22px;
            `}
            src={brand === "master" ? masterLogo : visaLogo}
          />
        )}
      </div>

      {/* 카드 정보 */}
      <div>
        <div
          css={css`
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            flex-direction: row;
            gap: 10px;
          `}
        >
          <span css={fixedCardNumberStyle}>{cardInfo.numbers[0]}</span>
          <span css={fixedCardNumberStyle}>{cardInfo.numbers[1]}</span>
          <span css={fixedCardNumberStyle}>{"•".repeat(cardInfo.numbers[2]?.length ?? 0)}</span>
          <span css={fixedCardNumberStyle}>{"•".repeat(cardInfo.numbers[3]?.length ?? 0)}</span>
        </div>
        <p
          css={css`
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            font-family: "Inter";
          `}
        >
          {cardInfo.expiry[0]}
          <span
            css={css`
              ${cardInfo.expiry[1] ? `visibility: visible` : `visibility: hidden`}
            `}
          >
            /
          </span>
          {cardInfo.expiry[1]}
        </p>
      </div>
    </div>
  );
};
export default Card;
