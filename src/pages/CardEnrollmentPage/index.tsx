import { useMemo, useState } from 'react';

import { CardForm, CardPreview, ProgressBar } from '../../components';
import { CardSide } from '../../components/CardPreviewComponents/CardPreview';
import { NUMBER_OF_CARD_FORM_STEP } from '../../constants';
import CardFormContext, {
  CardFormContextType,
} from '../../contexts/CardFormContext';
import { useCalculateCompletedCardInfo } from '../../hooks';
import useCardInfoReducer from '../../modules/useCardInfoReducer';

function CardEnrollmentPage() {
  const cardInfoReducer = useCardInfoReducer();
  const { cardInfo } = cardInfoReducer;
  const [cardSide, setCardSide] = useState<CardSide>('front');
  const cardFormContextValue: CardFormContextType = useMemo(
    () => ({ ...cardInfoReducer, setCardSide }),
    [cardInfo],
  );

  const { numberOfCompletedCardInfo } = useCalculateCompletedCardInfo({
    cardInfo,
  });

  return (
    <>
      <ProgressBar
        numberOfTotalStep={NUMBER_OF_CARD_FORM_STEP}
        currentStep={numberOfCompletedCardInfo}
      />
      <CardPreview side={cardSide} cardInfo={cardInfo} />
      <CardFormContext.Provider value={cardFormContextValue}>
        <CardForm />
      </CardFormContext.Provider>
    </>
  );
}

export default CardEnrollmentPage;
