import { useEffect, useState } from 'react';
import { Card } from '../types/card';
import CardFrontView from './CardFrontView';
import CardBackView from './CardBackView';
import styled from 'styled-components';

interface Props {
  cardInfo: Card;
}

export default function CardView({ cardInfo }: Props) {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    if (cardInfo.cvc) setShowBack(true);
    if (cardInfo.cvc.length === 3) setShowBack(false);
  }, [cardInfo.cvc]);

  return (
    <CardsContainer showBack={showBack}>
      <Front> {!showBack && <CardFrontView cardInfo={cardInfo} />}</Front>
      <Back> {showBack && <CardBackView cvc={cardInfo.cvc} />}</Back>
    </CardsContainer>
  );
}

const CardsContainer = styled.div<{ showBack: boolean }>`
  display: inline-grid;
  display: inline-block;
  color: white;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  cursor: pointer;
  transform: ${(props) =>
    props.showBack ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const Front = styled.div`
  backface-visibility: hidden;
`;
const Back = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
