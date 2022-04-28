import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  CardNumber,
  ExpiredDate,
  CardOwnerName,
  SecureCode,
  Password,
} from "./";

import Button from "../../Button";
import Header from "../../Header";
import {
  checkExpiredMonth,
  checkExpiredYear,
  checkNumberOnly,
  checkOwnerName,
  checkSecureCode,
  checkPassword,
} from "../../../validation";

import Card from "../../Card";
import Modal from "../../Modal";
import Palette from "../../Palette";
import useInputValue from "../../../hooks/useInputValue";

const AddCardPage = () => {
  const [isValidatedForm, setIsValidatedForm] = useState(false);
  const [isValidatedValueLength, setIsValidatedValueLength] = useState(false);

  const [firstCardNumber, isFirstCardNumberError, onChangeFirstCardNumber] =
    useInputValue({ validation: checkNumberOnly });
  const [secondCardNumber, isSecondCardNumberError, onChangeSecondCardNumber] =
    useInputValue({ validation: checkNumberOnly });
  const [thirdCardNumber, isThirdCardNumberError, onChangeThirdCardNumber] =
    useInputValue({ validation: checkNumberOnly });
  const [fourthCardNumber, isFourthCardNumberError, onChangeFourthCardNumber] =
    useInputValue({ validation: checkNumberOnly });

  const [expiredMonth, isExpiredMonthError, onChangeExpiredMonth] =
    useInputValue({ validation: checkExpiredMonth });
  const [expiredYear, isExpiredYearError, onChangeExpiredYear] = useInputValue({
    validation: checkExpiredYear,
  });

  const [ownerName, isOwnerNameError, onChangeOwnerName] = useInputValue({
    validation: checkOwnerName,
  });

  const [secureCode, isSecureCodeError, onChangeSecureCode] = useInputValue({
    validation: checkSecureCode,
  });

  const [firstPassword, isFirstPasswordError, onChangeFirstPassword] =
    useInputValue({
      validation: checkPassword,
    });
  const [secondPassword, isSecondPasswordError, onChangeSecondPassword] =
    useInputValue({
      validation: checkPassword,
    });

  const [cardType, setCardType] = useState("red");

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
        !isSecondPasswordError
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
    isSecondPasswordError
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
        expiredYear.length > 0
    );
  },
    [firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
      firstPassword,
      secondPassword,
      secureCode,
      expiredMonth,
      expiredYear
    ]);

  const onSubmitCardForm = (e) => {
    e.preventDefault();
    alert("카드 등록이 완료되었습니다!❤️🧡💛💚💙💜");
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickCardSelector = (type) => () => {
    setCardType(type);
  };

  return (
    <Container onSubmit={onSubmitCardForm}>
      <Header title="카드 추가" />
      <Card
        cardName="블랙 카드😎"
        name={ownerName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        firstCardNumber={firstCardNumber}
        secondCardNumber={secondCardNumber}
        thirdCardNumber={thirdCardNumber}
        fourthCardNumber={fourthCardNumber}
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
      <CardOwnerName
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
        <ButtonContainer>
          <Button name="submitButton" type="submit">
            다음
          </Button>
        </ButtonContainer>
      )}
      {isModalOpened && (
        <Modal onClickDimmed={closeModal}>
          <Palette onClickCardSelector={onClickCardSelector} />
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0;
`;

export default AddCardPage;
