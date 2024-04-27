import { useMemo, useState } from 'react';

import { CardForm, CardPreview } from '../../components';
import { CardSide } from '../../components/CardPreview';
import CardFormContext, {
  CardFormContextType,
} from '../../contexts/CardFormContext';
import useCardInfoReducer from '../../modules/useCardInfoReducer';

function CardEnrollmentPage() {
  const cardInfoReducer = useCardInfoReducer();
  const { cardInfo } = cardInfoReducer;
  const [cardSide, setCardSide] = useState<CardSide>('front');
  const cardFormContextValue: CardFormContextType = useMemo(
    () => ({ ...cardInfoReducer, setCardSide }),
    [cardInfo],
  );

  return (
    <>
      <CardPreview side={cardSide} cardInfo={cardInfo} />
      <CardFormContext.Provider value={cardFormContextValue}>
        <CardForm />
      </CardFormContext.Provider>
    </>
  );
}

export default CardEnrollmentPage;
