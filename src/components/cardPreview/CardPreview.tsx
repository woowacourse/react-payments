import CONDITION from '../../constants/condition';
import { CARD_TYPE, CardNumberKey, ExpiryDate } from '../../types/card';
import BackCardPreview from './BackCardPreview';
import FrontCardPreview from './FrontCardPreview';

interface CardPreviewProps {
  cardNumbers: Record<CardNumberKey, string>;
  expiryDate: ExpiryDate;
  cardholderName: string;
  cardType: CARD_TYPE;
  cvc: string;
  isCardFront: boolean;
}

const CardPreview = ({ cardNumbers, expiryDate, cardholderName, cardType, cvc, isCardFront }: CardPreviewProps) => {
  const firstTwoDigits = Number(cardNumbers.first.slice(0, 2));
  const isMaster = firstTwoDigits > CONDITION.MASTER_CARD_MIN && firstTwoDigits < CONDITION.MASTER_CARD_MAX;
  const isVisa = cardNumbers.first.startsWith(CONDITION.VISA);

  return (
    <>
      {isCardFront ? (
        <FrontCardPreview
          isVisa={isVisa}
          isMaster={isMaster}
          cardNumbers={cardNumbers}
          expiryDate={expiryDate}
          cardholderName={cardholderName}
          cardType={cardType}
        />
      ) : (
        <BackCardPreview cvc={cvc} />
      )}
    </>
  );
};

export default CardPreview;
