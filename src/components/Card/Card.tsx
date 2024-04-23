import styles from './Card.module.css';
import Visa from '../../assets/image/Visa.png';
import MasterCard from '../../assets/image/Mastercard.png';
import hideNumber from '../../assets/image/CardNumberBlind.svg';
import { getCardType } from '../../utils/getCardType';
import { Date } from '../../types/date';

const Card = ({ cardNumbers, date, ownerName }: { cardNumbers: string[]; date: Date; ownerName: string }) => {
  return (
    <div className={styles.card}>
      <div className={styles.ic_chip}></div>
      <div className={styles.chip__logo__wrapper}>
        <div className={styles.chip}></div>
        <CardLogo cardNumbers={cardNumbers} />
      </div>
      <div className={styles.card__info__container}>
        <CardNumbers cardNumbers={cardNumbers} />
        <ExpirationDate date={date} />
        <span>{ownerName}</span>
      </div>
    </div>
  );
};

const CardLogo = ({ cardNumbers }: { cardNumbers: string[] }) => {
  const cardStyle = styles.logo;
  const cardType = getCardType(cardNumbers[0]);

  if (cardType === 'VISA') return <img src={Visa} className={cardStyle} />;
  if (cardType === 'MASTER') return <img src={MasterCard} className={cardStyle} />;
};

const ExpirationDate = ({ date }: { date: Date }) => {
  const dateStringList = Object.values(date);

  // 모두 빈 칸이라면 /를 띄우지 않도록
  if (dateStringList.every((date) => date === '')) return;

  return <span>{dateStringList.join('/')}</span>;
};

const CardNumbers = ({ cardNumbers }: { cardNumbers: string[] }) => {
  return (
    <div className={styles.card__number__container}>
      {cardNumbers.map((cardNumber, i) => (
        <span className={styles.number}>
          {i >= cardNumbers.length / 2
            ? new Array(cardNumber.toString().length).fill(0).map(() => <img src={hideNumber} width='4' height='4' />)
            : cardNumber}
        </span>
      ))}
    </div>
  );
};

export default Card;
