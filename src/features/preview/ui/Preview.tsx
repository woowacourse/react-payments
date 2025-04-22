import CardInfo from '../../../entities/cardInfo/model/CardInfo';
import { getCardImagePath } from '../../../entities/cardInfo/model/cardType';
import './preview.css';

export default function Preview({ cardInfo }: { cardInfo: CardInfo }) {
  const imgSrc = getCardImagePath(cardInfo.cardNumber[0]);

  return (
    <div className="card-background">
      <div className="card-preview-container">
        <div className="card-preview payment-sim"></div>
        <div className="card-preview payment-method">
          {imgSrc !== '' && <img src={imgSrc} alt="cardType" className="card-preview" />}
        </div>
      </div>
      <div className="card-preview-info-container">
        <div className="card-preview-info-card-number-container">
          <div className="card-preview-info-text">{cardInfo?.cardNumber[0]}</div>
          <div className="card-preview-info-text">{cardInfo?.cardNumber[1]}</div>
          <div className="card-preview-info-text secret">
            {'•'.repeat(cardInfo.cardNumber[2]?.length)}
          </div>
          <div className="card-preview-info-text secret">
            {'•'.repeat(cardInfo.cardNumber[3]?.length)}
          </div>
        </div>
        <div className="card-preview-info-text">
          {cardInfo.cardExpirationDate.month}
          {cardInfo.cardExpirationDate.year && '/'}
          {cardInfo.cardExpirationDate.year}
        </div>
      </div>
    </div>
  );
}
