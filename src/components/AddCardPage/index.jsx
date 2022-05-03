import { useState, useEffect } from 'react';

import {
  checkCardNumber,
  checkExpiredMonth,
  checkExpiredYear,
  checkNumberOnly,
  checkOwnerName,
  checkSecureCode,
  checkPassword,
} from '../../validation';

import Button from '../Button';
import Header from '../Header';
import Card from '../Card';
import Modal from '../Modal';
import Palette from '../Palette';
import useInputValue from '../../hooks/useInputValue';

import CardNumber from './CardNumber';
import CardOwner from './CardOwner';
import ExpiredDate from './ExpiredDate';
import Password from './Password';
import SecureCode from './SecureCode';

import * as styled from './index.styled';

const AddCardPage = () => {
  const [isValidatedForm, setIsValidatedForm] = useState(false);
  const [isValidatedValueLength, setIsValidatedValueLength] = useState(false);

  const [firstCardNumber, isFirstCardNumberError, onChangeFirstCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [secondCardNumber, isSecondCardNumberError, onChangeSecondCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [thirdCardNumber, isThirdCardNumberError, onChangeThirdCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [fourthCardNumber, isFourthCardNumberError, onChangeFourthCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });

  const [expiredMonth, isExpiredMonthError, onChangeExpiredMonth] =
    useInputValue({
      isValidateInput: checkExpiredMonth,
      isInputAvailableValue: checkNumberOnly,
    });
  const [expiredYear, isExpiredYearError, onChangeExpiredYear] = useInputValue({
    isValidateInput: checkExpiredYear,
    isInputAvailableValue: checkNumberOnly,
  });

  const [ownerName, isOwnerNameError, onChangeOwnerName] = useInputValue({
    isValidateInput: checkOwnerName,
  });

  const [secureCode, isSecureCodeError, onChangeSecureCode] = useInputValue({
    isValidateInput: checkSecureCode,
    isInputAvailableValue: checkNumberOnly,
  });

  const [firstPassword, isFirstPasswordError, onChangeFirstPassword] =
    useInputValue({
      isValidateInput: checkPassword,
      isInputAvailableValue: checkNumberOnly,
    });
  const [secondPassword, isSecondPasswordError, onChangeSecondPassword] =
    useInputValue({
      isValidateInput: checkPassword,
      isInputAvailableValue: checkNumberOnly,
    });

  const [cardType, setCardType] = useState('red');

  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {
    setIsValidatedForm(
      !isFirstCardNumberError &&
        !isSecondCardNumberError &&
        !isThirdCardNumberError &&
        !isFourthCardNumberError &&
        !isExpiredMonthError &&
        !isExpiredYearError &&
        !isOwnerNameError &&
        !isSecureCodeError &&
        !isFirstPasswordError &&
        !isSecondPasswordError,
    );
  }, [
    isFirstCardNumberError,
    isSecondCardNumberError,
    isThirdCardNumberError,
    isFourthCardNumberError,
    isExpiredMonthError,
    isExpiredYearError,
    isOwnerNameError,
    isSecureCodeError,
    isFirstPasswordError,
    isSecondPasswordError,
  ]);

  useEffect(() => {
    setIsValidatedValueLength(
      firstCardNumber.length > 0 &&
        secondCardNumber.length > 0 &&
        thirdCardNumber.length > 0 &&
        fourthCardNumber.length > 0 &&
        firstPassword.length > 0 &&
        secondPassword.length > 0 &&
        secureCode.length > 0 &&
        expiredMonth.length > 0 &&
        expiredYear.length > 0,
    );
  }, [
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    firstPassword,
    secondPassword,
    secureCode,
    expiredMonth,
    expiredYear,
  ]);

  const onSubmitCardForm = (e) => {
    e.preventDefault();
    alert('카드 등록이 완료되었습니다!❤️🧡💛💚💙💜');
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickCardSelector = (type) => () => {
    setCardType(type);
    closeModal();
  };

  return (
    <styled.Container onSubmit={onSubmitCardForm}>
      <Header title="카드 추가" />
      <Card
        name="블랙 카드😎"
        ownerName={isOwnerNameError ? '' : ownerName}
        expiredMonth={isExpiredMonthError ? '' : expiredMonth}
        expiredYear={isExpiredYearError ? '' : expiredYear}
        firstCardNumber={isFirstCardNumberError ? '' : firstCardNumber}
        secondCardNumber={isSecondCardNumberError ? '' : secondCardNumber}
        thirdCardNumber={isThirdCardNumberError ? '' : thirdCardNumber}
        fourthCardNumber={isFourthCardNumberError ? '' : fourthCardNumber}
        color={cardType}
        onClick={openModal}
      />
      <CardNumber
        firstCardNumber={firstCardNumber}
        secondCardNumber={secondCardNumber}
        thirdCardNumber={thirdCardNumber}
        fourthCardNumber={fourthCardNumber}
        onChangeFirstCardNumber={onChangeFirstCardNumber}
        onChangeSecondCardNumber={onChangeSecondCardNumber}
        onChangeThirdCardNumber={onChangeThirdCardNumber}
        onChangeFourthCardNumber={onChangeFourthCardNumber}
        isError={
          isFirstCardNumberError ||
          isSecondCardNumberError ||
          isThirdCardNumberError ||
          isFourthCardNumberError
        }
      />
      <ExpiredDate
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        onChangeExpiredMonth={onChangeExpiredMonth}
        onChangeExpiredYear={onChangeExpiredYear}
        isError={isExpiredMonthError || isExpiredYearError}
      />
      <CardOwner
        ownerName={ownerName}
        onChangeOwnerName={onChangeOwnerName}
        isError={isOwnerNameError}
      />
      <SecureCode
        secureCode={secureCode}
        onChangeSecureCode={onChangeSecureCode}
        isError={isSecureCodeError}
      />
      <Password
        firstPassword={firstPassword}
        onChangeFirstPassword={onChangeFirstPassword}
        secondPassword={secondPassword}
        onChangeSecondPassword={onChangeSecondPassword}
        isError={isFirstPasswordError || isSecondPasswordError}
      />
      {isValidatedForm && isValidatedValueLength && (
        <styled.ButtonContainer>
          <Button name="submitButton" type="submit">
            다음
          </Button>
        </styled.ButtonContainer>
      )}
      {isModalOpened && (
        <Modal onClickDimmer={closeModal}>
          <Palette onClickCardSelector={onClickCardSelector} />
        </Modal>
      )}
    </styled.Container>
  );
};

export default AddCardPage;
