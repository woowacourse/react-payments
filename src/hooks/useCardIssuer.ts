import All_CARD_ISSUER_INFO from '../constants/allCardIssuerInfo';
import { useState, RefObject } from 'react';
import { AllCardIssuer, CardIssuerBackgroundColor } from '@/types';

type UseCardIssuerProps = {
  nextStepHandler: () => void;
  nextRef?: RefObject<HTMLInputElement>;
  isActiveCurrentStep: boolean;
};

type CardIssuerState = {
  cardIssuer: AllCardIssuer;
  backgroundColor: CardIssuerBackgroundColor;
};

const useCardIssuer = ({ nextStepHandler, isActiveCurrentStep }: UseCardIssuerProps) => {
  const [cardIssuer, setCardIssuer] = useState<CardIssuerState>({
    cardIssuer: '',
    backgroundColor: '',
  });

  const handleCardIssuer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;
    const foundCardIssuer = All_CARD_ISSUER_INFO.find(
      (cardIssuer) => cardIssuer.value === targetValue,
    );

    if (foundCardIssuer) {
      setCardIssuer({
        cardIssuer: targetValue as AllCardIssuer,
        backgroundColor: foundCardIssuer.backgroundColor,
      });

      if (isActiveCurrentStep) {
        nextStepHandler();
      }
    }
  };

  return { handleCardIssuer, cardIssuer };
};

export default useCardIssuer;
