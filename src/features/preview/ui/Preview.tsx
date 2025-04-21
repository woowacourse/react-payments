import CardInfo from '../../../features/cardInfo/model/CardInfo';
import './preview.css';

const getCardImageSrc = (cardNumber = '') => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === '4') return './Visa.svg';
  if (first === '5' && second >= 1 && second <= 5) return './Mastercard.svg';
  return '';
};

export default function Preview({ cardInfo }: { cardInfo: CardInfo }) {
  const imgSrc = getCardImageSrc(cardInfo.cardNumber[0]);

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
