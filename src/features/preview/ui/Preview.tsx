import CardInfo from '../../../features/cardInfo/model/CardInfo';
import { CARD_TYPE, CARD_IMAGE_PATH } from '../../../shared/constants/cardTypeConstants';
import './preview.css';

const getCardImageSrc = (cardNumber = '') => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === CARD_TYPE.VISA.FIRST_DIGIT) return CARD_IMAGE_PATH.VISA;
  if (
    first === CARD_TYPE.MASTERCARD.FIRST_DIGIT &&
    second >= CARD_TYPE.MASTERCARD.SECOND_DIGIT_MIN &&
    second <= CARD_TYPE.MASTERCARD.SECOND_DIGIT_MAX
  )
    return CARD_IMAGE_PATH.MASTERCARD;
  return CARD_IMAGE_PATH.DEFAULT;
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
