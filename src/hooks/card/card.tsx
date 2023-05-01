import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { CardNumber, CardRegisterInfo, ExpirationDate, Password } from '../../types/card.type';
import { isInputElement } from '../../utils/dom';
import { getCardList, setCardList } from '../../utils/localStorage';
import { isEnglish, isLongerThan, isNumber, isPatternMatch } from '../../utils/validation';
import useAutoFocus from '../@common/useAutoFocus';
import useErrors, { INVALID_FORMAT } from '../@common/useError';

export function useCardRegister() {
  const navigate = useNavigate();
  const { isAllFilled, handleChange } = useAutoFocus();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate(ROUTES.ALIAS, { replace: true });
  };

  return { isAllFilled, handleSubmit, handleChange };
}

export function useMyCardList() {
  const location = useLocation();
  const cardList = getCardList();
  const { cardRegisterInfo } = useCardRegisterContext();
  const [registeredCards, setRegisteredCards] = useState<CardRegisterInfo[]>(cardList);

  useEffect(() => {
    if (location.state?.registered) {
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
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
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
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
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
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
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
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
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
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
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

export const useCardAlias = () => {
  const {
    cardRegisterInfo: { alias },
    handleCardInfo,
  } = useCardRegisterContext();
  const navigate = useNavigate();

  const onChange = ({ target: { value, maxLength } }: ChangeEvent<HTMLInputElement>) => {
    if (value && isLongerThan(maxLength)(value)) return;

    handleCardInfo('alias', value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/', { state: { registered: true } });
  };

  return { alias, onChange, handleSubmit };
};
