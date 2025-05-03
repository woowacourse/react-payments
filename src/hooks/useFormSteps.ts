import { useState, useRef, useEffect } from 'react';
import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import { validateCardForm } from '../services/cardFormService';

export const useFormSteps = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
  formSteps: Array<{
    key: string;
    condition: () => boolean;
    component: React.ReactNode;
  }>,
) => {
  const sectionRefs = {
    cardNumber: useRef<HTMLDivElement>(null),
    cardBrand: useRef<HTMLDivElement>(null),
    expiryDate: useRef<HTMLDivElement>(null),
    cvc: useRef<HTMLDivElement>(null),
    secretNumber: useRef<HTMLDivElement>(null),
  };

  const [visibleSteps, setVisibleSteps] = useState({
    cardNumber: true,
    cardBrand: false,
    expiryDate: false,
    cvc: false,
    secretNumber: false,
  });

  useEffect(() => {
    formSteps.forEach(({ key, condition }) => {
      if (condition() && !visibleSteps[key as keyof typeof visibleSteps]) {
        setVisibleSteps(prev => ({ ...prev, [key]: true }));

        setTimeout(() => {
          const input =
            sectionRefs[key as keyof typeof sectionRefs].current?.querySelector(
              'input, select',
            );
          if (input) {
            (input as HTMLElement).focus();
          }
        }, 300);
      }
    });
  }, [cardInput, errorMessages, visibleSteps, formSteps]);

  const renderOrder = [
    'secretNumber',
    'cvc',
    'expiryDate',
    'cardBrand',
    'cardNumber',
  ];

  return {
    sectionRefs,
    visibleSteps,
    renderOrder,
  };
};
