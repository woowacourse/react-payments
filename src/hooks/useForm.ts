import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { isNumeric } from '../utils';

import { Validator } from '../types/validator';
import { CardInfo } from '../types/card';
import { SetCardList } from '../types';
import { useCardInfoActions } from '../context/CardInfoContext';

interface Error {
  firstCardNumbers: string;
  secondCardNumbers: string;
  thirdCardNumbers: string;
  fourthCardNumbers: string;
  expirationMonth: string;
  expirationYear: string;
  ownerName: string;
  securityNumbers: string;
  firstPassword: string;
  secondPassword: string;
  [key: string]: string;
}

const useForm = (setCardList: SetCardList<CardInfo>, validator: Validator) => {
  const { updateInputValue } = useCardInfoActions();

  const navigate = useNavigate();
  const [error, setError] = useState<Error>({
    firstCardNumbers: '',
    secondCardNumbers: '',
    thirdCardNumbers: '',
    fourthCardNumbers: '',
    expirationMonth: '',
    expirationYear: '',
    ownerName: '',
    securityNumbers: '',
    firstPassword: '',
    secondPassword: '',
  });

  const focusToNextFormElement = (
    formElements: HTMLInputElement[],
    curElement: HTMLInputElement
  ) => {
    formElements.forEach((elem, index: number) => {
      if (elem !== curElement) return;

      curElement.blur();
      formElements[index + 1]?.focus();
    });
  };

  const findInputError = (elements: HTMLInputElement[]) => {
    return elements.some((elem) => {
      if (elem.tagName !== 'INPUT') return false;

      const { name, value } = elem;
      const errorMessage = validator[name](value);

      if (errorMessage) {
        elem.focus();
        setError((prev) => ({
          ...prev,
          [name]: errorMessage,
        }));
        return true;
      }
      return false;
    });
  };

  const clearError = (name: keyof typeof error) => {
    setError((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;

    const hasInputError = findInputError([...elements] as HTMLInputElement[]);
    if (hasInputError) return;

    navigate('/register/nickname');
  };

  const onChange = ({ target: targetInput }: ChangeEvent<HTMLInputElement>) => {
    const elements = targetInput.closest('form')?.elements;
    if (!elements) return;

    const {
      name,
      value,
      maxLength,
      dataset: { type },
    } = targetInput;

    if ((type === 'number' || type === 'password') && !isNumeric(value)) return;
    if (value.length > maxLength) return;

    if (error[name]) clearError(name);

    if (value.length >= maxLength) {
      focusToNextFormElement([...elements] as HTMLInputElement[], targetInput);
    }

    updateInputValue(name, value);
  };

  return { onSubmit, onChange, error };
};

export default useForm;
