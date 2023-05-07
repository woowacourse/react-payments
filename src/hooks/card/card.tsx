import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { createCardRegisterAction } from '../../reducer/cardRegister/cardRegisterAction';
import { CardNumber, CardRegisterInfo, ExpirationDate, Password } from '../../types/card.type';
import { isInputElement } from '../../utils/dom';
import { getCardList, setCardList } from '../../utils/localStorage';
import { isEnglish, isLongerThan, isDigit } from '../../utils/validation';
import useAutoFocus from '../@common/useAutoFocus';
import useBoolean from '../@common/useBoolean';
import useErrors, { INVALID_FORMAT } from '../@common/useError';

export function useCardRegister() {
  const navigate = useNavigate();
  const [isLoading, startLoading, endLoading] = useBoolean(false);
  const { isAllValid, handleChange } = useAutoFocus();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    startLoading();

    setTimeout(() => {
      endLoading();
      navigate(ROUTES.ALIAS, { replace: true });
    }, 2000);
  };

  return { isLoading, isAllValid, handleSubmit, handleChange };
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
    dispatch,
  } = useCardRegisterContext();
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (field: keyof CardNumber) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isDigit(value)) return;

      dispatch(createCardRegisterAction('UPDATE_CARD_NUMBER', { field, value }));
    };

  return { error, cardNumber, onChangeByKey, onBlur };
}

export function useCardExpirationDate() {
  const {
    cardRegisterInfo: { expirationDate },
    dispatch,
  } = useCardRegisterContext();
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (field: keyof ExpirationDate) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isDigit(value)) return;

      dispatch(createCardRegisterAction('UPDATE_EXPIRATION_DATE', { field, value }));
    };

  return { error, expirationDate, onChangeByKey, onBlur };
}

export function useCardName() {
  const {
    cardRegisterInfo: { holderName },
    dispatch,
  } = useCardRegisterContext();
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value && !isEnglish(value)) return;

    dispatch(createCardRegisterAction('UPDATE_HOLDER_NAME', { value: value.toUpperCase() }));
  };

  return { error, holderName, onChange, onBlur };
}

export function useCardCVC() {
  const {
    cardRegisterInfo: { cvc },
    dispatch,
  } = useCardRegisterContext();
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value && !isDigit(value)) return;

    dispatch(createCardRegisterAction('UPDATE_CVC', { value }));
  };

  return { error, cvc, onChange, onBlur };
}
export function useCardPassword() {
  const {
    cardRegisterInfo: { password },
    dispatch,
  } = useCardRegisterContext();
  const { error, reportError, initError } = useErrors<CardNumber>();

  const onBlur = ({ target }: FocusEvent<HTMLElement>) => {
    if (isInputElement(target)) {
      target.validity.valid ? initError(target.name) : reportError({ [target.name]: INVALID_FORMAT });
    }
  };

  const onChangeByKey =
    (field: keyof Password) =>
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isDigit(value)) return;

      dispatch(createCardRegisterAction('UPDATE_PASSWORD', { field, value }));
    };

  return { error, password, onChangeByKey, onBlur };
}

export const useCardAlias = () => {
  const {
    cardRegisterInfo: { alias },
    dispatch,
  } = useCardRegisterContext();
  const navigate = useNavigate();

  const onChange = ({ target: { value, maxLength } }: ChangeEvent<HTMLInputElement>) => {
    if (value && isLongerThan(maxLength)(value)) return;

    dispatch(createCardRegisterAction('UPDATE_ALIAS', { value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/', { state: { registered: true } });
  };

  return { alias, onChange, handleSubmit };
};
