import { useState } from 'react';
import { CARD_NUMBER } from '../constants/card-app';
import visaCard from '../assets/visaCard.png';
import masterCard from '../assets/masterCard.png';

const cardImages = {
  visa: visaCard,
  master: masterCard,
} as const;

type CardLogo = keyof typeof cardImages;

const useCardLogo = () => {
  const [cardType, setCardType] = useState<CardLogo | null>(null);

  const isVisaCard = (firstPart: string) => {
    return parseInt(firstPart[0], 10) === CARD_NUMBER.visaStartNumber;
  };

  const isMasterCard = (firstPart: string) => {
    if (firstPart.length < 2) return false;

    const slicedFirstPart = parseInt(firstPart.slice(0, 2), 10);

    return (
      slicedFirstPart >= CARD_NUMBER.minMasterNumber &&
      slicedFirstPart <= CARD_NUMBER.maxMasterNumber
    );
  };

  const identifyCardType = (firstPart: string): void => {
    if (isVisaCard(firstPart)) {
      setCardType('visa');
      return;
    }

    if (isMasterCard(firstPart)) {
      setCardType('master');
      return;
    }

    setCardType(null);
  };

  return {
    cardType: cardType ? cardImages[cardType] : null,
    identifyCardType,
  };
};

export default useCardLogo;
