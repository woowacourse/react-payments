import { useState, useRef, useEffect } from 'react';
import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import { validateCardForm } from '../services/cardFormService';

type FormStepKey =
  | 'cardNumber'
  | 'cardBrand'
  | 'expiryDate'
  | 'cvc'
  | 'secretNumber';

export const useFormSteps = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
  formSteps: ReadonlyArray<{
    readonly key: FormStepKey;
    readonly order: number;
    readonly condition: () => boolean;
    readonly component: React.ReactNode;
  }>,
) => {
  const sectionRefs = {
    cardNumber: useRef<HTMLDivElement>(null),
    cardBrand: useRef<HTMLDivElement>(null),
    expiryDate: useRef<HTMLDivElement>(null),
    cvc: useRef<HTMLDivElement>(null),
    secretNumber: useRef<HTMLDivElement>(null),
  };

  const [visibleSteps, setVisibleSteps] = useState<
    Record<FormStepKey, boolean>
  >({
    cardNumber: true,
    cardBrand: false,
    expiryDate: false,
    cvc: false,
    secretNumber: false,
  });

  useEffect(() => {
    formSteps.forEach(({ key, condition }) => {
      if (condition() && !visibleSteps[key]) {
        setVisibleSteps(prev => ({ ...prev, [key]: true }));

        setTimeout(() => {
          const input =
            sectionRefs[key].current?.querySelector('input, select');
          if (input) {
            (input as HTMLElement).focus();
          }
        }, 300);
      }
    });
  }, [cardInput, errorMessages, visibleSteps, formSteps]);

  const getSortedSteps = () => {
    return [...formSteps].sort((a, b) => a.order - b.order);
  };

  return {
    sectionRefs,
    visibleSteps,
    getSortedSteps,
  };
};
