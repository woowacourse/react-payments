import styles from './CardPreview.module.css';
import { getCardType } from '../../utils/getCardType';
import { Date } from '../../types/date';
import { useFocusContext } from '../../providers/FocusProvider';
import { CardCompany } from '../../types/cardCompany';
import getCardInnerContentColor from '../../utils/getCardInnerContentColor.js';
import classNames from 'classnames';
import globalStyles from '../global.module.css';
import { memo } from 'react';

type CardPreview = {
  cardNumbers: string[];
  expirationDate: Date;
  ownerName: string;
  cardCompany: CardCompany | null;
  CVCNumbers: string;
};

const CardPreview = ({ cardNumbers, expirationDate, ownerName, cardCompany, CVCNumbers }: CardPreview) => {
  const { focusedInputId } = useFocusContext();

  const cardInnerContentColor = getCardInnerContentColor(cardCompany);
  const cardStyle = classNames(styles.card, {
    [styles[cardCompany?.toLocaleLowerCase() || '']]: cardCompany !== null,
    [globalStyles[`${cardInnerContentColor}_inner_content`]]: cardCompany !== null,
  });

  return (
    <>
      {focusedInputId === 'CVCNumberInput' ? (
        <BackOfCardPreview CVCNumbers={CVCNumbers} />
      ) : (
        <div className={cardStyle}>
          <div>{focusedInputId}</div>
          <div className={styles.ic_chip}></div>
          <div className={styles.chip__logo__wrapper}>
            <div className={styles.chip}></div>
            <CardLogo firstCardNumberUnit={cardNumbers[0]} />
          </div>
          <div className={styles.card__info__container}>
            <CardNumbers cardNumbers={cardNumbers} />
            <ExpirationDate expirationDate={expirationDate} />
            <span>{ownerName}</span>
          </div>
        </div>
      )}
    </>
  );
};

const BackOfCardPreview = ({ CVCNumbers }: { CVCNumbers: string }) => {
  return (
    <div className={`${styles.card} ${styles.back__of__card}`}>
      <div className={styles['cvc-section']}>{CVCNumbers}</div>
    </div>
  );
};

const CardLogo = memo(({ firstCardNumberUnit }: { firstCardNumberUnit: string }) => {
  if (firstCardNumberUnit.length > 2) return;

  const cardStyle = styles.logo;
  const cardType = getCardType(firstCardNumberUnit);

  if (cardType === 'Normal') return <></>;

  return <img src={`./images/${cardType}.png`} className={cardStyle} />;
});

const ExpirationDate = ({ expirationDate }: { expirationDate: Date }) => {
  const dateStringList = Object.values(expirationDate);

  if (dateStringList.every((date) => date === '')) return;

  return <span>{dateStringList.join('/')}</span>;
};

const HiddenNumber = () => {
  return (
    <svg width='4' height='4' viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='2' cy='2' r='2' />
    </svg>
  );
};

const CardNumbers = ({ cardNumbers }: { cardNumbers: string[] }) => {
  return (
    <div className={styles.card__number__container}>
      {cardNumbers.map((cardNumber, i) => (
        <span className={styles.number}>
          {i >= cardNumbers.length / 2
            ? new Array(cardNumber.toString().length).fill(0).map(() => <HiddenNumber />)
            : cardNumber}
        </span>
      ))}
    </div>
  );
};

export default CardPreview;
