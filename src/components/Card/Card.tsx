import MASTERCARD_IMAGE from "../../assets/image/Mastercard.png";
import VISA_IMAGE from "../../assets/image/Visa.png";
import CARD_NUMBER_BLIND_IMAGE from "../../assets/image/CardNumberBlind.svg";
import checkCardType from "../../utils/checkCardType";

import styles from "./Card.module.css";

const Card = ({
  cardNumbers,
  cardCompanyName,
  date,
  ownerName,
}: {
  cardNumbers: string[];
  cardCompanyName: string;
  date: Record<string, string>;
  ownerName: string;
}) => {
  const displayCardLogo = () => {
    const cardStyle = styles.logo;

    if (checkCardType(cardNumbers[0]) === "Mastercard")
      return <img src={MASTERCARD_IMAGE} className={cardStyle} />;
    if (checkCardType(cardNumbers[0]) === "Visa")
      return <img src={VISA_IMAGE} className={cardStyle} />;
  };

  return (
    <div className={styles.card}>
      <div className={styles.ic_chip}></div>
      <div className={styles.chip__logo__wrapper}>
        <div className={styles.chip}></div>
        {displayCardLogo()}
      </div>
      <div className={styles.card__info__container}>
        <div className={styles.card__number__container}>
          {cardNumbers.map((cardNumber, i) => (
            <span className={styles.number}>
              {i >= cardNumbers.length / 2
                ? new Array(cardNumber.toString().length)
                    .fill(0)
                    .map(() => (
                      <img src={CARD_NUMBER_BLIND_IMAGE} width="4" height="4" />
                    ))
                : cardNumber}
            </span>
          ))}
          <div />
        </div>
        <div>
          {Object.values(date).map((date, i) => (
            <span style={{ color: "white" }}>
              {date}
              {i < Object.values(date).length - 1 && "/"}
            </span>
          ))}
        </div>
        <span style={{ color: "white" }}>{ownerName}</span>
      </div>
    </div>
  );
};

export default Card;
