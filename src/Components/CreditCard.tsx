/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import masterImage from "../assets/masterImage.png";
import visaImage from "../assets/visaImage.png";
import { CardContext } from "../App";
import { useContext } from "react";

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
  marginBottom: "20px",
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

const periodRowStyle = css({
  display: "flex",
  gap: "5px",
});

const periodStyle = css({
  width: "20px",
});

const formatTwoDigitNumber = (n: number | undefined) => {
  if (!n) return "";
  return String(n).padStart(2, "0");
};

const CreditCard = () => {
  const { cardNumbers, cardValidityPeriod, ownerName } = useContext(CardContext)![0];

  const pattern = /^(51|52|53|54)/;
  const { month, year } = cardValidityPeriod!;
  const cardImage =
    cardNumbers?.firstNumbers[0] === 4
      ? visaImage
      : cardNumbers?.firstNumbers[0] && pattern.test(cardNumbers?.firstNumbers?.join(""))
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
          {Object.values(cardNumbers)?.map((part, index) => (
            <div key={index} css={width42}>
              {index < 2 ? part.join("") : part.map(() => "*").join("")}
            </div>
          ))}
        </div>
        <div css={periodRowStyle}>
          <span css={periodStyle}>{formatTwoDigitNumber(month)}</span>
          <span>{(month || year) && "/"}</span>
          <span css={periodStyle}>{formatTwoDigitNumber(year)}</span>
        </div>
        <div> {ownerName}</div>
      </section>
    </div>
  );
};

export default CreditCard;
