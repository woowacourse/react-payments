import INITIAL_CARD_ISSUER_INFO from '../constants/initialCardIssuerInfo';
import { useState, RefObject, useEffect, useRef } from 'react';

type UseCardIssuerProps = {
  nextStepHandler: () => void;
  nextRef: RefObject<HTMLInputElement>;
  isValidCurrentStep: boolean;
};

const useCardIssuer = ({ nextStepHandler, nextRef, isValidCurrentStep }: UseCardIssuerProps) => {
  const [cardIssuer, setCardIssuer] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef<HTMLSelectElement>(null);

  const handleCardIssuer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsCompleted(false);
    const targetValue = e.target.value;
    const foundCardIssuer = INITIAL_CARD_ISSUER_INFO.find(
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
