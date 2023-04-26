import type { CardProps } from '../type';
import { changeNumberToMask } from '../utils/util';
import './Card.css';

const Card = ({ cardType, cardNumber, cardOwner, expireYear, expireMonth }: CardProps) => {
  return (
    <div className="card">
      <div className="card-track-1">
        <span className="card-type">{cardType}</span>
      </div>
      <div className="card-track-2">
        <div className="ic-chip"></div>
      </div>
      <div className="card-track-3">
        <span>{cardNumber.first}</span>
        <span>{cardNumber.second}</span>
        <span>{changeNumberToMask(cardNumber.third)}</span>
        <span>{changeNumberToMask(cardNumber.fourth)}</span>
      </div>
      <div className="card-track-4">
        <span className="card-owner-view">{cardOwner}</span>
        <span>{`${expireYear}/${expireMonth}`}</span>
      </div>
    </div>
  );
};
// TODO: 만료일 입력 로직 외부로 분리

export default Card;
