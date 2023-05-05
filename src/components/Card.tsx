import type { CardProps } from '../type';
import { changeNumberToMask } from '../utils/util';
import { formatExpireDate } from './formatting/format';
import { CARD_COMPANY_ENG } from '../utils/constants';
import './Card.css';

const Card = ({
  cardCompany,
  cardFirstNumber,
  cardSecondNumber,
  cardThirdNumber,
  cardFourthNumber,
  cardOwner,
  expireYear,
  expireMonth,
  onClick = () => {},
}: CardProps) => {
  return (
    <div className={`card ${CARD_COMPANY_ENG[cardCompany]}`} onClick={onClick}>
      <div className="card-track-1">
        <span className="card-type">{cardCompany || '카드회사를 선택해 주세요.'}</span>
      </div>
      <div className="card-track-2">
        <div className="ic-chip"></div>
      </div>
      <div className="card-track-3">
        <span>{cardFirstNumber}</span>
        <span>{cardSecondNumber}</span>
        <span>{changeNumberToMask(cardThirdNumber)}</span>
        <span>{changeNumberToMask(cardFourthNumber)}</span>
      </div>
      <div className="card-track-4">
        <span className="card-owner-view">{cardOwner}</span>
        <span>{formatExpireDate(expireYear, expireMonth)}</span>
      </div>
    </div>
  );
};

export default Card;
