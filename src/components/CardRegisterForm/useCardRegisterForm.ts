import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useState,
} from 'react';

import { isNotAlphabet, isNotNumber } from '../../utils/validation';
import type { Focus } from '../Input';

const useCardRegisterForm = (inputRefs: RefObject<Focus>[]) => {
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');

  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');

  const [owner, setOwner] = useState('');

  const [cvc, setCvc] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  const isValidCardData =
    cardNumber1.length === 4 &&
    cardNumber2.length === 4 &&
    cardNumber3.length === 4 &&
    cardNumber4.length === 4 &&
    expiredMonth.length === 2 &&
    expiredYear.length === 2 &&
    cvc.length === 3 &&
    cardPassword1.length === 1 &&
    cardPassword2.length === 1;

  const autoFocusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength, tabIndex } = target;

    if (tabIndex === inputRefs.length) return;

    if (value.length === maxLength) {
      inputRefs[tabIndex].current?.focus();
    }
  };

  const handleNumberChange = (
    event: ChangeEvent<HTMLInputElement>,
    setNumber: Dispatch<SetStateAction<string>>,
  ) => {
    const { value } = event.target;

    if (isNotNumber(value)) return;

    setNumber(value);

    autoFocusNextInput(event.target);
  };

  const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    setOwner(value.toUpperCase());

    autoFocusNextInput(event.target);
  };

  return {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    cardPassword1,
    cardPassword2,

    setCardNumber1,
    setCardNumber2,
    setCardNumber3,
    setCardNumber4,
    setExpiredMonth,
    setExpiredYear,
    setCvc,
    setCardPassword1,
    setCardPassword2,

    isValidCardData,
    handleNumberChange,
    handleOwnerChange,
  };
};

export default useCardRegisterForm;
