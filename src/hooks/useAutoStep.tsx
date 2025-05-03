import {useState, useEffect, useRef} from 'react';
import {CardCompany, CardNumber, ExpirationDate} from '../type/Card';

export type CardForm = {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  cvcNumber: string;
  cardCompany: CardCompany | '';
  password: string;
};

const useAutoStep = <M extends Record<string, boolean>>(
  formData: CardForm,
  isErrors: M
) => {
  const [step, setStep] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const maxStepRef = useRef(1);

  const validationCheckers = {
    cardNumber: () =>
      !isErrors.cardNumber &&
      Object.values(formData.cardNumber).every((v) => v.length === 4),
    cardCompany: () => !isErrors.cardCompany && !!formData.cardCompany,
    expirationDate: () =>
      !isErrors.expirationDate &&
      Object.values(formData.expirationDate).every((v) => v.length === 2),

    cvcNumber: () => !isErrors.cvcNumber && formData.cvcNumber.length === 3,
    password: () => !isErrors.password && formData.password.length === 2,
  };

  const calculateStep = () => {
    if (!validationCheckers.cardNumber?.()) return 1;
    if (!validationCheckers.cardCompany?.()) return 2;
    if (!validationCheckers.expirationDate?.()) return 3;
    if (!validationCheckers.cvcNumber?.()) return 4;
    if (!validationCheckers.password?.()) return 5;
    return 6;
  };

  useEffect(() => {
    const nextStep = calculateStep();
    if (nextStep > maxStepRef.current) {
      maxStepRef.current = nextStep;
      setStep(maxStepRef.current);
    }

    if (nextStep === 6) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }, [formData, isErrors]);

  return {step, isButtonVisible};
};

export default useAutoStep;
