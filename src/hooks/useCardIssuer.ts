import All_CARD_ISSUER_INFO from '../constants/allCardIssuerInfo';
import { useState, RefObject, useEffect, useRef } from 'react';
import { AllCardIssuer } from '@/types';

type UseCardIssuerProps = {
  nextStepHandler: () => void;
  nextRef?: RefObject<HTMLInputElement>;
  isValidCurrentStep: boolean;
};

const useCardIssuer = ({ nextStepHandler, nextRef, isValidCurrentStep }: UseCardIssuerProps) => {
  const [cardIssuer, setCardIssuer] = useState<AllCardIssuer | ''>('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef<HTMLSelectElement>(null);

  const handleCardIssuer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsCompleted(false);
    const targetValue = e.target.value;
    const foundCardIssuer = All_CARD_ISSUER_INFO.find(
      (cardIssuer) => cardIssuer.value === targetValue,
    );

    if (foundCardIssuer) {
      setCardIssuer(foundCardIssuer.issuer);
      setBackgroundColor(foundCardIssuer.backgroundColor);

      if (!isCompleted && isValidCurrentStep) {
        nextStepHandler();
      }

      setIsCompleted(true);
    }
  };

  useEffect(() => {
    if (isCompleted && ref) {
      ref.current?.blur();
    }
    if (isCompleted && nextRef) {
      nextRef.current?.focus();
    }
  }, [isCompleted]);

  return { backgroundColor, handleCardIssuer, ref, cardIssuer };
};

export default useCardIssuer;
