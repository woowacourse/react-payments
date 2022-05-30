import { CardInfo } from 'types/index';

interface CardProps {
  card: CardInfo;
}

function Card({ card }: CardProps) {
  const {
    theme,
    company,
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    ownerName,
    expireMonth,
    expireYear,
  } = card;

  return (
    <div className="card-box">
      <div className={`empty-card bg-${theme}`}>
        <div className="card-top">
          <span className="card-text">{company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{`${firstCardNumber} ${secondCardNumber}`}</span>
            <input className="card-text-dot" type="password" value={thirdCardNumber} disabled />
            <input className="card-text-dot" type="password" value={fourthCardNumber} disabled />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text name-wrap">{ownerName || 'NAME'}</span>
          <span className="card-text">{`${expireMonth || 'MM'}/${expireYear || 'YY'}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
