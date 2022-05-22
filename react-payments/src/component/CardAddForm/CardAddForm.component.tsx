import React, {
  DispatchWithoutAction,
  useCallback,
  useContext,
  useEffect,
} from "react";
import styled from "styled-components";

import CardNumberContainer from "component/CardNumberContainer/CardNumberContainer.component";
import ExpireDateContainer from "component/ExpireDateContainer/ExpireDateContainer.component";
import UserNameContainer from "component/UserNameContainer/UserNameContainer.component";
import SecurityCodeContainer from "component/SecurityCodeContainer/SecurityCodeContainer.component";
import CardPasswordContainer from "component/CardPasswordContainer/CardPasswordContainer.component";

import { CardTypeContext } from "provider/CardTypeProvider";
import { CardNumberContext } from "provider/CardNumberProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { UserNameContext } from "provider/UserNameProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { useNavigate } from "react-router-dom";
import Card from "component/common/Card/Card.component";
import useReady from "hooks/useReady";
import { isAllInputReady, isEdit } from "util/validator";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import { editCard } from "api/cardApi";
import { CardDataContext, editCardDataAction } from "provider/CardDataProvider";
import { ErrorContext } from "provider/ErrorContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export interface CardAddFormProps {
  toggleShowModal: DispatchWithoutAction;
  id: string | undefined;
}

const CardAddForm = ({ toggleShowModal, id }: CardAddFormProps) => {
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
    state: { cardTypeInfo, cardTypeReady },
    action: { setCardTypeInfo, resetCardTypeInfo },
  } = cardTypeContext;
  const {
    state: { cardNumber, cardNumberReady },
    action: { setCardNumber, resetCardNumber },
  } = cardNumberContext;
  const {
    state: { expireDate, expireDateReady },
    action: { setExpireDate, resetExpireDate },
  } = expireDateContext;
  const {
    state: { userName },
    action: { setUserName, resetUserName },
  } = userNameContext;
  const {
    state: { securityCode, securityCodeReady },
    action: { setSecurityCode, resetSecurityCode },
  } = securityCodeContext;
  const {
    state: { cardPassword, cardPasswordReady },
    action: { setCardPassword, resetCardPassword },
  } = cardPasswordContext;
  const { cardData, dispatch } = cardDataContext;
  const { setError } = errorContext;

  const [allFormReady] = useReady(
    {
      cardNumberReady,
      expireDateReady,
      securityCodeReady,
      cardPasswordReady,
      cardTypeReady,
    },
    isAllInputReady
  );
  const navigate = useNavigate();

  const resetCardStatus = useCallback(() => {
    resetCardNumber();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();
    resetCardPassword();
    resetCardTypeInfo();
  }, [
    resetCardNumber,
    resetCardPassword,
    resetCardTypeInfo,
    resetExpireDate,
    resetSecurityCode,
    resetUserName,
  ]);

  useEffect(() => {
    if (isEdit(id) && Object.keys(cardData).length === 0) {
      navigate("/");
    }
  }, [Object.keys(cardData).length, id, navigate]);

  useEffect(() => {
    if (typeof id === "undefined" || !cardData[id]) {
      resetCardStatus();
      return;
    }

    setCardNumber(cardData[id].cardNumber);
    setExpireDate({
      month: cardData[id].month,
      year: cardData[id].year,
    });
    setUserName(cardData[id].userName);
    setSecurityCode(cardData[id].securityCode);
    setCardPassword(cardData[id].cardPassword);
    setCardTypeInfo(cardData[id].cardTypeInfo);
  }, [
    id,
    cardData,
    setCardNumber,
    setCardPassword,
    setExpireDate,
    setUserName,
    setCardTypeInfo,
    setSecurityCode,
    resetCardStatus,
  ]);

  const handleEditCard = () => {
    if (typeof id === "undefined") return;

    dispatch(
      editCardDataAction({
        id: id,
        month: expireDate.month,
        year: expireDate.year,
        userName,
        cardTypeInfo,
        cardNumber,
        securityCode,
        cardPassword,
      })
    );
    try {
      editCard(id, {
        month: expireDate.month,
        year: expireDate.year,
        userName,
        cardTypeInfo,
        cardNumber,
        securityCode,
        cardPassword,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    }

    resetCardStatus();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit(id)) {
      handleEditCard();
      navigate("/");
      return;
    }
    navigate("/register");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Card
        cardNumber={cardNumber}
        userName={userName}
        month={expireDate.month}
        year={expireDate.year}
        cardTypeInfo={cardTypeInfo}
        onClick={toggleShowModal}
      />
      <CardNumberContainer />
      <ExpireDateContainer />
      <UserNameContainer />
      <SecurityCodeContainer />
      <CardPasswordContainer />

      {allFormReady &&
        (isEdit(id) ? (
          <LinkButton type="submit">수정</LinkButton>
        ) : (
          <LinkButton type="submit">다음</LinkButton>
        ))}
    </Form>
  );
};

export default CardAddForm;
