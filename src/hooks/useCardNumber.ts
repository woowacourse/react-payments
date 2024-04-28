import { useRef, useState, RefObject, useEffect } from 'react';
import validate from '../utils/validate';
import { MAX_LENGTH } from '../constants/cardSection';
import { InitialCardNumberState } from '@/types';

type UseCardNumberHookProps = {
  initialCardNumberStates: InitialCardNumberState[];
  nextStepHandler: () => void;
  ref: RefObject<HTMLSelectElement>;
  isValidCurrentStep: boolean;
};

const useCardNumber = ({
  initialCardNumberStates,
  nextStepHandler,
  ref,
  isValidCurrentStep,
}: UseCardNumberHookProps) => {
  const [cardNumbers, setCardNumbers] = useState<InitialCardNumberState[]>(initialCardNumberStates);
  const [cardBrand, setCardBrand] = useState<'none' | 'Visa' | 'MasterCard'>('none');
  const [isCompleted, setIsCompleted] = useState(false);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleCardBrandImage = (totalCardNumbers: string) => {
    if (validate.isVisa(totalCardNumbers)) {
      setCardBrand('Visa');
      return;
    } else if (validate.isMasterCard(totalCardNumbers)) {
      setCardBrand('MasterCard');
      return;
    }

    setCardBrand('none');
  };

  const cardNumbersChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;

    const isValid =
      newValue === '' || validate.isValidDigit(newValue) || validate.isEmptyValue(newValue);

    const newCardNumbers = cardNumbers.map((cardNumber, i) => {
      if (i === index) {
        return {
          value: isValid ? newValue : cardNumber.value,
          isError: !isValid,
        };
      }

      return cardNumber;
    });

    const totalCardNumbers = newCardNumbers.map((card) => card.value).join('');

    if (totalCardNumbers.length === MAX_LENGTH.TOTAL_CARD_NUMBER) {
      handleCardBrandImage(totalCardNumbers);
    }

    setCardNumbers(newCardNumbers);

    if (isCompleted && totalCardNumbers.length < MAX_LENGTH.TOTAL_CARD_NUMBER) {
      setIsCompleted(false);
    }

    if (isValid && newValue.length === MAX_LENGTH.INDIVIDUAL_CARD_NUMBER && index < 3) {
      refs[index + 1].current?.focus();
    }

    if (totalCardNumbers.length === MAX_LENGTH.TOTAL_CARD_NUMBER) {
      if (isValidCurrentStep) {
        nextStepHandler();
      }
      setIsCompleted(true);
    }
  };

  useEffect(() => {
    if (isCompleted && ref.current) {
      ref.current.focus();
    }
  }, [isCompleted]);

  return { cardNumbers, cardNumbersChangeHandler, cardBrand, refs };
};

export default useCardNumber;
