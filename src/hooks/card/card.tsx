import React, {
  ChangeEvent,
  FormEvent,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import { CardNumber, CardRegisterInfo } from '../../types/card.type';
import { isPatternMatch, isValidateKey } from '../../utils/input';
import { getCardList, setCardList } from '../../utils/localStorage';
import { isNumber } from '../../utils/validation';

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

      const { value, pattern, name, maxLength } = input;
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

  const updateCardNumber: <T extends keyof CardNumber>(key: T, value: CardNumber[T]) => void = (
    key,
    value
  ) => {
    handleCardInfo('cardNumber', {
      ...cardNumber,
      [key]: value,
    });
  };

  const onChangeByKey =
    (key: keyof CardNumber) =>
    ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
      if (value && !isNumber(value)) return;

      updateCardNumber(key, value);
    };

  const defaultConditions = useMemo<HTMLAttributes<HTMLInputElement>>(
    () => ({
      pattern: '^[0-9]{4}$',
      maxLength: 4,
      asChild: true,
      required: true,
      inputMode: 'numeric',
    }),
    []
  );
  return { cardNumber, defaultConditions, onChangeByKey };
}

export function useCardExpirationDate() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = {
    maxLength: 2,
    asChild: true,
    required: true,
    onKeyDown,
  };

  const monthConditions = useMemo(
    () => ({
      ...defaultConditions,
      pattern: '^(0[1-9]|1[0-2])$',
      placeholder: 'MM',
    }),
    []
  );

  const yearConditions = useMemo(
    () => ({
      ...defaultConditions,
      pattern: '^(2[3-9]|[3-3][0-9]|40)$',
      placeholder: 'YY',
    }),
    []
  );
  return { monthConditions, yearConditions };
}

export function useCardName() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (!isValidateKey(e, '^[a-zA-Z]$')) {
      e.key = '';
      e.preventDefault();
    }
  }, []);

  const defaultConditions = useMemo(
    () => ({
      asChild: true,
      required: true,
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      pattern: '^[a-zA-Z]{1,30}$',
      maxLength: 30,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}

export function useCardCVC() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo<HTMLAttributes<HTMLInputElement>>(
    () => ({
      pattern: '[0-9]{3}',
      type: 'number',
      maxLength: 3,
      asChild: true,
      required: true,
      inputMode: 'numeric',
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}
export function useCardPassword() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      pattern: '[0-9]',
      maxLength: 1,
      asChild: true,
      required: true,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}
