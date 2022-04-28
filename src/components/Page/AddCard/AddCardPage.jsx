import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../Button";
import Header from "../../Header";
import CardNumber from "./CardNumber";
import ExpiredDate from "./ExpiredDate";
import CardOwnerName from "./CardOwnerName";
import {
  checkExpiredMonth,
  checkExpiredYear,
  checkNumberOnly,
  checkOwnerName,
  checkSecureCode,
  checkPassword,
} from "../../../validation";

import Card from "../../Card";
import Password from "./Password";
import SecureCode from "./SecureCode";

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
  });

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
  });

  return (
    <Container>
      <Header title="카드 추가" />
      <Card
        cardName="카드"
        name={ownerName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        firstCardNumber={firstCardNumber}
        secondCardNumber={secondCardNumber}
        thirdCardNumber={thirdCardNumber}
        fourthCardNumber={fourthCardNumber}
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
      />
      <ExpiredDate
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        onChangeExpiredMonth={onChangeExpiredMonth}
        onChangeExpiredYear={onChangeExpiredYear}
      />
      <CardOwnerName
        ownerName={ownerName}
        onChangeOwnerName={onChangeOwnerName}
      />
      <SecureCode
        secureCode={secureCode}
        onChangeSecureCode={onChangeSecureCode}
      />
      <Password
        firstPassword={firstPassword}
        onChangeFirstPassword={onChangeFirstPassword}
        secondPassword={secondPassword}
        onChangeSecondPassword={onChangeSecondPassword}
      />
      {isValidatedForm && isValidatedValueLength && (
        <ButtonContainer>
          <Button name="submitButton">다음</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: -20px;
`;

export default AddCardPage;
