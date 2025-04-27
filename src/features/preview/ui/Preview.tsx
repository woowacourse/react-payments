import CardInfo from '../../../entities/cardInfo/model/CardInfo';
import { getCardImagePath } from '../../../entities/cardInfo/model/cardType';
import { PREVIEW_CLASS_NAMES } from '../constants/previewClassName';
import { getCardImagePath } from '../../../entities/cardInfo/utils/cardTypeUtils';
import './preview.css';

export default function Preview({ cardInfo }: { cardInfo: CardInfo }) {
  const imgSrc = getCardImagePath(cardInfo.cardNumber[0]);
  const {
    CONTAINER,
    PREVIEW_CONTAINER,
    CARD_PREVIEW,
    PAYMENT_SIM,
    PAYMENT_METHOD,
    INFO_CONTAINER,
    INFO_CARD_NUMBER_CONTAINER,
    INFO_TEXT,
    SECRET,
  } = PREVIEW_CLASS_NAMES;

  return (
    <div className={CONTAINER}>
      <div className={PREVIEW_CONTAINER}>
        <div className={`${CARD_PREVIEW} ${PAYMENT_SIM}`}></div>
        <div className={`${CARD_PREVIEW} ${PAYMENT_METHOD}`}>
          {imgSrc !== '' && <img src={imgSrc} alt="cardType" className={CARD_PREVIEW} />}
        </div>
      </div>
      <div className={INFO_CONTAINER}>
        <div className={INFO_CARD_NUMBER_CONTAINER}>
          <div className={INFO_TEXT}>{cardInfo?.cardNumber[0]}</div>
          <div className={INFO_TEXT}>{cardInfo?.cardNumber[1]}</div>
          <div className={`${INFO_TEXT} ${SECRET}`}>
            {'•'.repeat(cardInfo.cardNumber[2]?.length)}
          </div>
          <div className={`${INFO_TEXT} ${SECRET}`}>
            {'•'.repeat(cardInfo.cardNumber[3]?.length)}
          </div>
        </div>
        <div className={INFO_TEXT}>
          {cardInfo.cardExpirationDate.month}
          {cardInfo.cardExpirationDate.year && '/'}
          {cardInfo.cardExpirationDate.year}
        </div>
      </div>
    </div>
  );
}
