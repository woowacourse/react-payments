/** @jsxImportSource @emotion/react */
import { CardInfoContext } from "../App";
import IC_CHIP from "../Images/Ic_chip.png";
import { css } from "@emotion/react";
import { matchCardIssuerImgSrc } from "../domain/matchCardIssuer";
import { useContext } from "react";

const styledCardPreview = css`
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
  background-color: #333333;
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

export default function CardPreview() {
  const { cardIssuer, cardNumbers, cardExpiredDate, cardHolder } =
    useContext(CardInfoContext).cardInfo;

  return (
    <section css={styledCardPreview}>
      <div css={styledCardHeader}>
        <img src={IC_CHIP} alt="IC Chip" />
        <img src={matchCardIssuerImgSrc(cardIssuer)} alt={cardIssuer} />
      </div>
      <div css={styledCardNumberContainer}>
        {cardNumbers.map((number, idx) => (
          <span key={idx} css={styledCardNumber}>
            {idx < 2 ? number : "*".repeat(number.length)}
          </span>
        ))}
      </div>
      <div css={styledCardText}>
        {cardExpiredDate.join("") !== "" ? cardExpiredDate.join("/") : ""}
      </div>
      <div css={styledCardText}>{cardHolder}</div>
    </section>
  );
}
