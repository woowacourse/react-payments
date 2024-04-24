import { useState } from 'react';

import { CardForm, CardPreview } from '../../components';
import { CardSide } from '../../components/CardPreview';
import useCardInfoReducer from '../../modules/useCardInfoReducer';

function CardEnrollmentPage() {
  const cardInfoReducer = useCardInfoReducer();
  const { cardInfo } = cardInfoReducer;
  const [cardSide, setCardSide] = useState<CardSide>('front');
  const cardFormProps = { ...cardInfoReducer, setCardSide };

  return (
    <>
      <CardPreview side={cardSide} cardInfo={cardInfo} />
      <CardForm {...cardFormProps} />
    </>
  );
}

export default CardEnrollmentPage;
