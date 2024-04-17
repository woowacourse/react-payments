/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import masterImage from "../assets/masterImage.png";
import visaImage from "../assets/visaImage.png";

const style = css({
  background: "#333",
  width: "212px",
  height: "132px",
  boxShadow: "3px 3px 5px 0px #00000040",
  borderRadius: "4px",
  padding: "8px 17px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: "500",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  fontFamily: "Roboto",
});

const logoStyle = css({
  width: "36px",
  height: "22px",
  background: "#DDCD78",
  borderRadius: "2px",
});

const rowStyle = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});

const width42 = css({
  width: "42px",
});

const cardInfoStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > div {
    height: 24px;
  }
`;

const formatTwoDigitNumber = (n: number | undefined) => {
  if (!n) return;
  return String(n).padStart(2, "0");
};

interface Props {
  cardInfo: Partial<CardInfo>;
}

const CreditCard: React.FC<Props> = ({ cardInfo: { cardNumbers, cardValidityPeriod, ownerName } }) => {
  const pattern = /^(51|52|53|54)/;
  const [month, year] = cardValidityPeriod!;
  let cardImage;
  if (cardNumbers && cardNumbers[0]) {
    cardImage = cardNumbers[0]?.startsWith("4")
      ? visaImage
      : cardNumbers[0] && pattern.test(cardNumbers[0])
        ? masterImage
        : null;
  }

  return (
    <div css={style}>
      <div css={rowStyle}>
        <div css={logoStyle}></div>
        {cardImage ? <img css={logoStyle} src={cardImage} /> : null}
      </div>
      <section css={cardInfoStyle}>
        <div css={rowStyle}>
          {cardNumbers?.map((part, index) => (
            <div key={index} css={width42}>
              {part}
            </div>
          ))}
        </div>
        <div>
          {formatTwoDigitNumber(Number(month))}
          {month && "/"}
          {year}
        </div>
        <div> {ownerName}</div>
      </section>
    </div>
  );
};

export default CreditCard;
