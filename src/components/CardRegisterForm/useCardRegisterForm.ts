import { ChangeEvent, FormEventHandler, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useCardRegisterInput from './useCardRegisterInput';
import { useCardCompany } from '../../domain/context/CardCompanyContext';
import { useCardsContext } from '../../domain/context/CardsContext';
import { useModalContext } from '../common/Modal/ModalContext';
import { uuid } from '../../utils/uuid';

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

const useCardRegisterForm = () => {
  const navigate = useNavigate();
  const cardNumberInputRef = useRef<HTMLInputElement>(null);
  const expiredMonthInputRef = useRef<HTMLInputElement>(null);
  const { isModalOpen, openModal } = useModalContext();
  const { cardCompany } = useCardCompany();
  const { registerCard } = useCardsContext();
  const { cardData, handleNumberChange, handleOwnerChange } =
    useCardRegisterInput();
  const {
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
  } = cardData;

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

  const isValidExpiredDate = (month: number, year: number) => {
    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month <= currentMonth) return false;

    return true;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!cardCompany) {
      alert('카드를 터치 후 카드사를 선택해 주세요.');

      return;
    }

    if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
      alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
      expiredMonthInputRef.current?.focus();

      return;
    }

    const cardData = {
      id: uuid(),
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

  const handleFormChange = (event: ChangeEvent<HTMLFormElement>) => {
    autoFocusNextInput(event);
  };

  const autoFocusNextInput = (event: ChangeEvent<HTMLFormElement>) => {
    const { value, name, maxLength } = event.target;
    const inputEls = Array.from(event.currentTarget.elements).filter(
      (el) => el.tagName.toLowerCase() === 'input',
    );

    if (value.length === maxLength) {
      const targetInput = inputEls.find(
        (inputEl) => (inputEl as HTMLInputElement).name === name,
      );

      if (targetInput === undefined) return;

      const index = inputEls.indexOf(targetInput);

      (inputEls[index + 1] as HTMLInputElement)?.focus();
    }
  };

  useEffect(() => {
    openModal();
  }, []);

  useEffect(() => {
    if (isModalOpen === false) {
      cardNumberInputRef.current?.focus();
    }
  }, [isModalOpen]);

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
    isCardFormFilled,
    cardNumberInputRef,
    expiredMonthInputRef,
    handleNumberChange,
    handleOwnerChange,
    handleSubmit,
    handleFormChange,
  };
};

export default useCardRegisterForm;
