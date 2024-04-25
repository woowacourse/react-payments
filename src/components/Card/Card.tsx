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
    if (checkCardType(cardNumbers[0]) === "Mastercard")
      return <img src={MASTERCARD_IMAGE} className={styles.logo} />;
    if (checkCardType(cardNumbers[0]) === "Visa")
      return <img src={VISA_IMAGE} className={styles.logo} />;
  };

  const getCardCompanyClass = (companyName: string) => {
    switch (companyName) {
      case "BC카드":
        return styles.BC;
      case "신한카드":
        return styles.shinhan;
      case "카카오뱅크":
        return styles.kakao;
      case "현대카드":
        return styles.hyundai;
      case "우리카드":
        return styles.woori;
      case "롯데카드":
        return styles.lotte;
      case "하나카드":
        return styles.hana;
      case "국민카드":
        return styles.kookmin;
      default:
        return "";
    }
  };

  const cardCompanyClass = getCardCompanyClass(cardCompanyName);
  return (
    <div className={`${styles.card} ${cardCompanyClass}`}>
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
