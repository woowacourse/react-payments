import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { CardNumber, CardRegisterInfo, ExpirationDate, Password } from '../../types/card.type';
import { isInputElement } from '../../utils/dom';
import { getCardList, setCardList } from '../../utils/localStorage';
import { isEnglish, isNumber, isPatternMatch } from '../../utils/validation';
import useErrors, { INVALID_FORMAT } from '../@common/useError';

export function useMyCardRegister() {
  const navigate = useNavigate();
  const [isAllValid, setIsAllValid] = useState(false);

  const findInvalidInput = (inputs: HTMLInputElement[]) => inputs.find((input) => !input.validity.valid);
  const validateAllInputs = (inputs: HTMLInputElement[]) =>
    inputs.every((input, i, inputs) => input.validity.valid);

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((e) => e.tagName === 'INPUT') as HTMLInputElement[];

    inputs.forEach((input, i) => {
      if (input !== e.target) return;

      const { value, pattern, name, maxLength, validity } = input;
      const nextInput = findInvalidInput(inputs.slice(i + 1)) ?? inputs[i + 1];
      const prevInput = findInvalidInput(inputs.slice(0, i).reverse()) ?? inputs[i - 1];

      if (name === 'name') {
        value.length === maxLength && nextInput?.focus();
        !value && prevInput?.focus();

        return;
      }

      isPatternMatch(value, pattern) && nextInput?.focus();
      !value && prevInput?.focus();
    });

    setIsAllValid(validateAllInputs(inputs));
  };

  const handleSubmit = (data: unknown) => {
    return (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      navigate('/', { state: { cardRegisterInfo: data } });
    };
  };

  return { isAllValid, handleSubmit, handleChange };
}

export function useMyCardList() {
  const location = useLocation();
  const cardList = getCardList();
  const [registeredCards, setRegisteredCards] = useState<CardRegisterInfo[]>(cardList);

  useEffect(() => {
    if (location.state?.cardRegisterInfo) {
      const { cardRegisterInfo } = location.state;

      setCardList([cardRegisterInfo, ...registeredCards]);
      setRegisteredCards((prev) => [cardRegisterInfo, ...prev]);
    }

    return () => {
      window.history.replaceState({}, document.title);
    };
  }, []);

  return { registeredCards };
}

export function useCardNumber() {
  const {
    cardRegisterInfo: { cardNumber },
    handleCardInfo,
  } = useCardRegisterContext();
  const { error, reportError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid
        ? reportError({ [target.name]: '' })
        : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (key: keyof CardNumber) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isNumber(value)) return;

      handleCardInfo('cardNumber', {
        ...cardNumber,
        [key]: value,
      });
    };

  return { error, cardNumber, onChangeByKey, onBlur };
}

export function useCardExpirationDate() {
  const {
    cardRegisterInfo: { expirationDate },
    handleCardInfo,
  } = useCardRegisterContext();
  const { error, reportError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid
        ? reportError({ [target.name]: '' })
        : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (key: keyof ExpirationDate) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isNumber(value)) return;

      handleCardInfo('expirationDate', {
        ...expirationDate,
        [key]: value,
      });
    };

  return { error, expirationDate, onChangeByKey, onBlur };
}

export function useCardName() {
  const {
    cardRegisterInfo: { holderName },
    handleCardInfo,
  } = useCardRegisterContext();
  const { error, reportError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid
        ? reportError({ [target.name]: '' })
        : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value && !isEnglish(value)) return;

    handleCardInfo('holderName', value.toUpperCase());
  };

  return { error, holderName, onChange, onBlur };
}

export function useCardCVC() {
  const {
    cardRegisterInfo: { cvc },
    handleCardInfo,
  } = useCardRegisterContext();
  const { error, reportError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid
        ? reportError({ [target.name]: '' })
        : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value && !isNumber(value)) return;

    handleCardInfo('cvc', value);
  };

  return { error, cvc, onChange, onBlur };
}
export function useCardPassword() {
  const {
    cardRegisterInfo: { password },
    handleCardInfo,
  } = useCardRegisterContext();
  const { error, reportError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid
        ? reportError({ [target.name]: '' })
        : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (key: keyof Password) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isNumber(value)) return;

      handleCardInfo('password', {
        ...password,
        [key]: value,
      });
    };

  return { error, password, onChangeByKey, onBlur };
}
