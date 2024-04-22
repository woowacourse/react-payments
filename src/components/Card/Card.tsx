import styles from './Card.module.css';
import Visa from '../../assets/image/Visa.png';
import MasterCard from '../../assets/image/Mastercard.png';
import hideNumber from '../../assets/image/CardNumberBlind.svg';

const Card = ({
  cardNumbers,
  date,
  ownerName,
}: {
  cardNumbers: string[];
  date: Record<string, string>;
  ownerName: string;
}) => {
  const isVisaCard = (firstCardNumberUnit: string) => {
    return firstCardNumberUnit.startsWith('4');
  };

  const isMasterCard = (firstCardNumberUnit: string) => {
    const startTwoNumber = Number(firstCardNumberUnit.slice(0, 2));

    return startTwoNumber >= 51 && startTwoNumber <= 55;
  };

  const displayCardLogo = () => {
    const cardStyle = styles.logo;

    if (isMasterCard(cardNumbers[0])) return <img src={Visa} className={cardStyle} />;
    if (isVisaCard(cardNumbers[0])) return <img src={MasterCard} className={cardStyle} />;
  };

  const displayExpirationDate = () => {
    const dateStringList = Object.values(date);

    // 모두 빈 칸이라면 /를 띄우지 않도록
    if (dateStringList.every((date) => date === '')) return;

    return <span>{dateStringList.join('/')}</span>;
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
                    .map(() => <img src={hideNumber} width='4' height='4' />)
                : cardNumber}
            </span>
          ))}
          <div />
        </div>
        <div>{displayExpirationDate()}</div>
        <span>{ownerName}</span>
      </div>
    </div>
  );
};

export default Card;
