import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CardNameInput from "component/CardNameInput/CardNameInput.component";
import Card from "component/common/Card/Card.component";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import MessageBox from "component/common/MessageBox/MessageBox.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";

import { CardDataContext } from "provider/CardDataProvider";
import { CardNumberContext } from "provider/CardNumberProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { CardTypeContext } from "provider/CardTypeProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { UserNameContext } from "provider/UserNameProvider";

import { isDuplicatedCardName, isInvalidCardName } from "util/validator";
import { registerCard } from "api/cardApi";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "constants/index";
import useReady from "hooks/useReady";
import { ErrorContext } from "provider/ErrorContext";

const CardRegisterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const CardRegisterForm = () => {
  const cardTypeContext = useContext(CardTypeContext);
  const cardNumberContext = useContext(CardNumberContext);
  const expireDateContext = useContext(ExpireDateContext);
  const userNameContext = useContext(UserNameContext);
  const securityCodeContext = useContext(SecurityCodeContext);
  const cardPasswordContext = useContext(CardPasswordContext);
  const cardDataContext = useContext(CardDataContext);
  const errorContext = useContext(ErrorContext);

  if (!cardNumberContext) throw new Error("Cannot find CardNumberContext");
  if (!cardTypeContext) throw new Error("Cannot find CardTypeContext");
  if (!expireDateContext) throw new Error("Cannot find ExpireDateContext");
  if (!userNameContext) throw new Error("Cannot find UserNameContext");
  if (!securityCodeContext) throw new Error("Cannot find SecurityCodeContext");
  if (!cardPasswordContext) throw new Error("Cannot find CardPasswordContext");
  if (!cardDataContext) throw new Error("Cannot find CardDataContext");
  if (!errorContext) throw new Error("Cannot find ErrorContext");

  const {
    state: { cardTypeInfo },
    action: { resetCardTypeInfo },
  } = cardTypeContext;
  const {
    state: { cardNumber },
    action: { resetCardNumber },
  } = cardNumberContext;
  const {
    state: { expireDate },
    action: { resetExpireDate },
  } = expireDateContext;
  const {
    state: { userName },
    action: { resetUserName },
  } = userNameContext;
  const {
    state: { securityCode },
    action: { resetSecurityCode },
  } = securityCodeContext;
  const {
    state: { cardPassword },
    action: { resetCardPassword },
  } = cardPasswordContext;
  const { cardData } = cardDataContext;
  const { setError } = errorContext;

  const [cardName, setCardName] = useState("");
  const [cardNameLengthReady] = useReady(cardName, isInvalidCardName);
  const [uniqueCardNameReady] = useReady(
    cardName,
    isDuplicatedCardName,
    cardData
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (securityCode === "") {
      navigate("/");
    }
  }, [navigate, securityCode]);

  const handleSubmitCardData = async () => {
    resetCardNumber();
    resetCardPassword();
    resetCardTypeInfo();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();
    try {
      await registerCard({
        month: expireDate.month,
        year: expireDate.year,
        userName,
        cardTypeInfo,
        cardName,
        cardNumber,
        securityCode,
        cardPassword,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }
  };

  const onChangeCardName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitCardData();
  };

  return (
    <Form onSubmit={onSubmit}>
      <CardRegisterGroup>
        <PageTitle>카드 등록이 완료되었습니다.</PageTitle>
        <Card
          size="big"
          cardNumber={cardNumber}
          cardTypeInfo={cardTypeInfo}
          month={expireDate.month}
          year={expireDate.year}
          userName={userName}
        />
        <CardNameInput
          value={cardName}
          onChange={onChangeCardName}
          ready={cardNameLengthReady && uniqueCardNameReady}
        />
        {!cardNameLengthReady && (
          <MessageBox styleType="error">
            {ERROR_MESSAGE["card-name-length"]}
          </MessageBox>
        )}
        {!uniqueCardNameReady && (
          <MessageBox styleType="error">
            {ERROR_MESSAGE["unique-card-name"]}
          </MessageBox>
        )}
        {cardNameLengthReady && uniqueCardNameReady && (
          <MessageBox styleType="success">{SUCCESS_MESSAGE}</MessageBox>
        )}
      </CardRegisterGroup>
      {cardNameLengthReady && uniqueCardNameReady && (
        <LinkButton type="submit">확인</LinkButton>
      )}
    </Form>
  );
};

export default CardRegisterForm;
