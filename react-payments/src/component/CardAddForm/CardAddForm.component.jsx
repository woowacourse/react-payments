import { useCallback, useContext, useEffect } from "react";
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
import { CardDataContext } from "provider/CardDataProvider";
import { REDUCER_TYPE } from "constants";
import { ErrorContext } from "provider/ErrorContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const CardAddForm = ({ toggleShowModal, id }) => {
  const {
    state: { cardTypeInfo, cardTypeReady },
    action: { setCardTypeInfo, resetCardTypeInfo },
  } = useContext(CardTypeContext);
  const {
    state: { cardNumber, cardNumberReady },
    action: { setCardNumber, resetCardNumber },
  } = useContext(CardNumberContext);
  const {
    state: { expireDate, expireDateReady },
    action: { setExpireDate, resetExpireDate },
  } = useContext(ExpireDateContext);
  const {
    state: { userName },
    action: { setUserName, resetUserName },
  } = useContext(UserNameContext);
  const {
    state: { securityCode, securityCodeReady },
    action: { setSecurityCode, resetSecurityCode },
  } = useContext(SecurityCodeContext);
  const {
    state: { cardPassword, cardPasswordReady },
    action: { setCardPassword, resetCardPassword },
  } = useContext(CardPasswordContext);
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
  const { cardData, dispatch } = useContext(CardDataContext);
  const { setError } = useContext(ErrorContext);

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
    if (isEdit(id) && cardData.length === 0) {
      navigate("/");
    }
  }, [cardData.length, id, navigate]);

  useEffect(() => {
    if (!isEdit(id) || !cardData[id]) {
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
    dispatch({
      type: REDUCER_TYPE.EDIT,
      payload: {
        id: id,
        month: expireDate.month,
        year: expireDate.year,
        userName,
        cardTypeInfo,
        cardNumber,
        securityCode,
        cardPassword,
      },
    });
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
      setError(err);
    }

    resetCardStatus();
  };

  const onSubmit = (e) => {
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
