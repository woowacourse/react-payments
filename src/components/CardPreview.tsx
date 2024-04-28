/** @jsxImportSource @emotion/react */
import IC_CHIP from "../Images/Ic_chip.png";
import { cardColorMatcher } from "../constants/cardIssuer";
import { css } from "@emotion/react";
import { matchCardTypeImgSrc } from "../domain/matchCardType";

const styledCardPreview = (color: string) => css`
  width: 212px;
  height: 132px;
  top: 77px;
  left: 82px;
  padding: 10px 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  background-color: ${color};
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`;

const styledCardHeader = css`
  height: 22px;
  display: flex;
  justify-content: space-between;

  img {
    width: 32px;
  }
`;

const styledCardText = css`
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
`;

const styledCardNumberContainer = css`
  display: flex;
  gap: 10px;
`;

const styledCardNumber = css`
  ${styledCardText.styles}
  width:30px;
`;

const styledCvcNumberLine = {
  width: "212px",
  height: "24px",
  margin: "0px 0px -68px -17px",
  padding: "1px 17px",
  color: "white",
  backgroundColor: "#CBBA64",

  display: "flex",
  justifyContent: "end",
  alignItems: "center",
};

interface CardPreviewProps {
  cardType: "" | "Visa" | "MasterCard";
  cardNumbers: [string, string, string, string];
  cardExpirationPeriod: [string, string];
  cardHolder: string;
  cardIssuer: string;
  cardCvcNumber: string;
  isCardFrontView: boolean;
  setIsCardFrontView: React.Dispatch<boolean>;
}

export default function CardPreview({
  cardType,
  cardNumbers,
  cardExpirationPeriod,
  cardHolder,
  cardIssuer,
  cardCvcNumber,
  isCardFrontView,
  setIsCardFrontView,
}: CardPreviewProps) {
  return (
    <div
      onClick={() => {
        setIsCardFrontView(!isCardFrontView);
      }}
    >
      {isCardFrontView ? (
        <section css={styledCardPreview(cardColorMatcher(cardIssuer))}>
          <div css={styledCardHeader}>
            <img src={IC_CHIP} alt="" />
            <img src={matchCardTypeImgSrc(cardType)} alt={cardType} />
          </div>
          <div css={styledCardNumberContainer}>
            {cardNumbers.map((number, idx) => (
              <span key={idx} css={styledCardNumber}>
                {idx < 2 ? number : "*".repeat(number.length)}
              </span>
            ))}
          </div>
          <div css={styledCardText}>
            {cardExpirationPeriod.join("") !== ""
              ? cardExpirationPeriod.join("/")
              : ""}
          </div>
          <div css={styledCardText}>{cardHolder}</div>
        </section>
      ) : (
        <section css={styledCardPreview("#D5D5D5")}>
          <div css={styledCvcNumberLine}>{cardCvcNumber}</div>
        </section>
      )}
    </div>
  );
}
