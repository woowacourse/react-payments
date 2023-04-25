import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  RefObject,
  SetStateAction,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { useCardCompany } from '../../domain/context/CardCompanyContext';
import { useCardsContext } from '../../domain/context/CardsContext';
import { isNotAlphabet, isNotNumber } from '../../utils/validation';
import type { Focus } from '../common/Input';

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

const useCardRegisterForm = (inputRefs: RefObject<Focus>[]) => {
  const navigate = useNavigate();
  const { cardCompany } = useCardCompany();
  const { registerCard } = useCardsContext();

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

  const isCardFormFilled =
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

  const isValidExpiredDate = (month: number, year: number) => {
    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month <= currentMonth) return false;

    return true;
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!cardCompany) {
      alert('카드를 터치 후 카드사를 선택해 주세요.');

      return;
    }

    if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
      const expiredMonthInput = inputRefs[4];

      alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
      expiredMonthInput.current?.focus();

      return;
    }

    const cardData = {
      cardCompany,
      cardNumber1,
      cardNumber2,
      expiredMonth,
      expiredYear,
      owner: owner.trim(),
    };

    registerCard(cardData);
    navigate('/card-nickname');
  };

  return {
    cardCompany,
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

    isCardFormFilled,
    handleNumberChange,
    handleOwnerChange,
    handleSubmit,
  };
};

export default useCardRegisterForm;
