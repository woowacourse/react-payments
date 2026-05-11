import { css } from "@emotion/react";
import type { CardInfo } from "../../types";
import masterLogo from "../../assets/masterLogo.png";
import visaLogo from "../../assets/visaLogo.png";
import amexLogo from "../../assets/amexLogo.png";
import unionpayLogo from "../../assets/unionpayLogo.png";
import dinersLogo from "../../assets/dinersLogo.png";
import { decideCardColor } from "../../utils/decideCardInfo";

const LOGO_MAP: Record<string, string> = {
  master: masterLogo,
  visa: visaLogo,
  amex: amexLogo,
  diners: dinersLogo,
  unionpay: unionpayLogo,
};

const cardTextStyle = css`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;

const cardNumberSpanStyle = css`
  display: inline-block;
  min-width: 30px;
  font-family: "Inter";
`;

const Card = ({ cardInfo, brand }: { cardInfo: CardInfo; brand: string }) => {
  const cardColor = decideCardColor(cardInfo.company);

  return (
    <div
      css={css`
        width: 212px;
        height: 132px;
        border-radius: 4px;
        background-color: ${cardColor};
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
            src={LOGO_MAP[brand]}
          />
        )}
      </div>

      {/* 카드 정보 */}
      <div>
        <div
          css={[
            cardTextStyle,
            css`
              display: flex;
              flex-direction: row;
              gap: 10px;
            `,
          ]}
        >
          {cardInfo.numbers.map((num, i) => (
            <span key={i} css={cardNumberSpanStyle}>
              {i < 2 ? num : "•".repeat(num?.length ?? 0)}
            </span>
          ))}
        </div>
        <p
          css={[
            cardTextStyle,
            css`
              font-family: "Inter";
            `,
          ]}
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
