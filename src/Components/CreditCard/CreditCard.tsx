/** @jsxImportSource @emotion/react */
import masterImage from "../../assets/images/masterImage.png";
import visaImage from "../../assets/images/visaImage.png";
import {
  cardStyle,
  logoStyle,
  rowStyle,
  width42,
  cardInfoStyle,
  periodRowStyle,
  periodStyle,
} from "./CreditCard.styles";

const formatTwoDigitNumber = (n: number | undefined) => {
  if (!n) return "";
  return String(n).padStart(2, "0");
};

interface Props {
  cardInfo: CardInfo;
}

const CreditCard: React.FC<Props> = ({
  cardInfo: { cardNumbers, cardValidityPeriod, ownerName },
}) => {
  const pattern = /^(51|52|53|54)/;
  const { month, year } = cardValidityPeriod!;
  const cardImage =
    cardNumbers?.firstNumbers[0] === 4
      ? visaImage
      : cardNumbers?.firstNumbers[0] &&
          pattern.test(cardNumbers?.firstNumbers?.join(""))
        ? masterImage
        : null;

  return (
    <div css={cardStyle}>
      <div css={rowStyle}>
        <div css={logoStyle}></div>
        {cardImage && <img css={logoStyle} src={cardImage} alt="Card Logo" />}
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
          {(month || year) && <span>/</span>}
          <span css={periodStyle}>{formatTwoDigitNumber(year)}</span>
        </div>
        <div>{ownerName}</div>
      </section>
    </div>
  );
};

export default CreditCard;
