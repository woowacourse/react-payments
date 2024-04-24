import { useEffect, useState } from 'react';
import { Card } from '../types/card';
import CardFrontView from './CardFrontView';
import CardBackView from './CardBackView';

interface Props {
  cardInfo: Card;
}

export default function CardView({ cardInfo }: Props) {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (cardInfo.cvc) setShowBack(true);
    else setShowBack(false);
  }, [cardInfo.cvc]);

  return (
    <>
      {!showBack && <CardFrontView cardInfo={cardInfo} />}
      {showBack && <CardBackView cvc={cardInfo.cvc} />}
    </>
  );
}
