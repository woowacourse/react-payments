import React from "react";
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
  return (
    <Container>
      <Header title="카드 추가" />
      <Card
        cardName="호프"
        name="SALLY"
        expiredDate="03/23"
        cardNumber={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
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
      <Button></Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export default AddCardPage;
