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

const cardInfoStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const formatCardNumbers = (cardNumbers: number[] | undefined) => {
  if (!cardNumbers) return;
  return cardNumbers.map((value, index) => {
    if (index > 7) return "*";
    return value;
  });
};

const formatTwoDigitNumber = (n: number) => {
  return String(n).padStart(2, "0");
};

interface Props {
  cardInfo: Partial<CardInfo>;
}

const CreditCard: React.FC<Props> = ({ cardInfo: { cardNumbers, cardValidityPeriod, ownerName } }) => {
  const formatNumbers =
    formatCardNumbers(cardNumbers)
      ?.join("")
      .match(/.{1,4}/g) || [];

  const pattern = /^(51|52|53|54)/;

  const cardImage = formatNumbers[0]?.startsWith("4")
    ? visaImage
    : formatNumbers[0] && pattern.test(formatNumbers[0])
      ? masterImage
      : null;

  return (
    <div css={style}>
      <div css={rowStyle}>
        <div css={logoStyle}></div>
        {cardImage ? <img css={logoStyle} src={cardImage} /> : null}
      </div>
      <section css={cardInfoStyle}>
        <div css={rowStyle}>
          {formatNumbers.map((part, index) => (
            <div key={index} css={width42}>
              {part}
            </div>
          ))}
        </div>
        <div>
          {cardValidityPeriod?.month && formatTwoDigitNumber(cardValidityPeriod.month)}/{cardValidityPeriod?.year}
        </div>
        <div> {ownerName}</div>
      </section>
    </div>
  );
};

export default CreditCard;
