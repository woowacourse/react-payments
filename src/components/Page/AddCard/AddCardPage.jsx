import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Header from "../../Header";
import { useState } from "react";
import CardNumber from "./CardNumber";
import ExpiredNumber from "./ExpiredDate";
import CardOwnerName from "./CardOwnerName";
import { checkCardNumber } from "../../../validation";

import Card from "../../Card";
import Password from "./Password";
import SecureCode from "./SecureCode";

import useInputValue from "../../../hooks/useInputValue";

const AddCardPage = () => {
  const [firstCardNumber, isFirstCardNumberError, onChangeFirstCardNumber] =
    useInputValue({ validation: checkCardNumber });
  const [secondCardNumber, isSecondCardNumberError, onChangeSecondCardNumber] =
    useInputValue({ validation: checkCardNumber });
  const [thirdCardNumber, isThridCardNumberError, onChangeThirdCardNumber] =
    useInputValue({ validation: checkCardNumber });
  const [fourthCardNumber, isFourthCardNumberError, onChangeFourthCardNumber] =
    useInputValue({ validation: checkCardNumber });

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
      <ExpiredNumber />
      <CardOwnerName />
      <SecureCode />
      <Password />
      <Button></Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export default AddCardPage;
