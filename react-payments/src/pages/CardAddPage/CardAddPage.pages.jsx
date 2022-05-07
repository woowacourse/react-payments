import { useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "component/common/Card/Card.component";
import Header from "component/common/Header/Header.component";
import LinkButton from "component/common/LinkButton/LinkButton.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import CardNumberContainer from "component/CardNumberContainer/CardNumberContainer.component";
import ExpireDateContainer from "component/ExpireDateContainer/ExpireDateContainer.component";
import UserNameContainer from "component/UserNameContainer/UserNameContainer.component";
import SecurityCodeContainer from "component/SecurityCodeContainer/SecurityCodeContainer.component";
import CardPasswordContainer from "component/CardPasswordContainer/CardPasswordContainer.component";
import PageContainer from "component/common/PageContainer/PageContainer.component";
import ColorBoxModal from "component/ColorBoxModal/ColorBoxModal.component";

import useReady from "hooks/useReady";
import { isAllInputReady } from "util/validator";
import { ALERT_MEESAGE, REDUCER_TYPE } from "constants";
import { editCard } from "api/cardApi";
import { CardTypeContext } from "provider/CardTypeProvider";
import { CardDataContext } from "provider/CardDataProvider";
import { CardNumberContext } from "provider/CardNumberProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { UserNameContext } from "provider/UserNameProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";

const CardAddPage = () => {
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
  const { cardData, dispatch } = useContext(CardDataContext);
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
  const [isShowModal, toggleShowModal] = useReducer(
    (isShowModal) => !isShowModal,
    false
  );
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof id !== "undefined" && cardData.length === 0) {
      navigate("/");
    }
  }, [cardData.length, id, navigate]);

  useEffect(() => {
    if (typeof id === "undefined" || !cardData[id]) {
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

    editCard(id, {
      month: expireDate.month,
      year: expireDate.year,
      userName,
      cardTypeInfo,
      cardNumber,
      securityCode,
      cardPassword,
    });

    resetCardNumber();
    resetExpireDate();
    resetUserName();
    resetSecurityCode();
    resetCardPassword();
    resetCardTypeInfo();

    window.alert(ALERT_MEESAGE.EDIT);
  };

  return (
    <PageContainer type="add">
      <Header>
        <LinkButton
          onClick={() => {
            navigate("/");
          }}
        >
          {"<"}
        </LinkButton>
        <PageTitle type="header">
          {typeof id === "undefined" ? "카드 추가" : "카드 수정"}
        </PageTitle>
      </Header>

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
        (typeof id !== "undefined" ? (
          <LinkButton type="submit" onClick={handleEditCard} path="/">
            수정
          </LinkButton>
        ) : (
          <LinkButton type="submit" path="/register">
            다음
          </LinkButton>
        ))}
      {isShowModal && <ColorBoxModal toggleModal={toggleShowModal} />}
    </PageContainer>
  );
};

export default CardAddPage;
