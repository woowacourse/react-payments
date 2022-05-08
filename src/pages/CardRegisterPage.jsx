import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "hooks/useModal";
import { CardContext } from "contexts/CardContext";

import { Button, Card, Form, Modal, PageTitle } from "components/common";
import {
  CARD_TYPES,
  CARD_TYPES_DEFAULT,
  MODAL_NAME,
} from "constants/constants";
import {
  CardExpireDateInputForm,
  CardNumbersInputForm,
  CardOwnerInputForm,
  CardPasswordInputForm,
  CVCInputForm,
  CardSelectModal,
  CVCHelperModal,
} from "components/cardRegister";

export const CardRegisterPage = () => {
  const { modalVisibleState, setModalState, modalName } = useModal();
  const cards = useContext(CardContext);
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);
  const [expireDate, setExpireDate] = useState({
    month: "",
    year: "",
  });
  const [cardType, setCardType] = useState({
    name: "",
    color: "",
  });
  const [cardNumbers, setCardNumbers] = useState({
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  });
  const [checkInputs, setCheckInputs] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardCVC: false,
    cardPassword: false,
    cardType: false,
  });

  useEffect(() => {
    setAllCompleted(Object.values(checkInputs).every((check) => check));
    if (!checkInputs.cardNumbers && checkInputs.cardType) {
      setCheckInputs((prev) => ({ ...prev, cardType: false }));
      setCardType(() => CARD_TYPES_DEFAULT);
    }
  }, [checkInputs]);

  const modalSelector = (name) => {
    return () => {
      setModalState(true, name);
    };
  };

  const setCheckInputStateOf = (state) => {
    return (isCompleted) => {
      setCheckInputs((prev) => ({ ...prev, [state]: isCompleted }));
    };
  };

  const loadModal = () => {
    switch (modalName) {
      case MODAL_NAME.CARD_TYPE:
        return (
          <CardSelectModal
            cardTypes={CARD_TYPES}
            handleVisible={() => setModalState(false)}
            handleCardType={setCardType}
            handleCardTypeCheck={setCheckInputStateOf("cardType")}
          />
        );
      case MODAL_NAME.CARD_CVC:
        return <CVCHelperModal />;
      default:
        return <div>no data</div>;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cardId = cards.id;
    const formData = e.target;
    const wrappingCardData = {
      id: cardId,
      cardNickname: cardType.name,
      cardNumbers: cardNumbers,
      cardType: cardType,
      expireDate: expireDate,
      ownerName: ownerName,
      cardCVC: formData.elements["input_CVC"].value,
      cardPassword:
        formData.elements["input_password-0"].value +
        formData.elements["input_password-1"].value,
    };

    cards.id++;
    cards.list.push(wrappingCardData);
    navigate(`/cardName/${cardId}`);
  };

  return (
    <>
      <PageTitle onClick={() => navigate("/cardList")} visible={true}>
        카드 추가
      </PageTitle>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        handleModalVisible={modalSelector(MODAL_NAME.CARD_TYPE)}
      />
      <Form onSubmit={handleFormSubmit}>
        <CardNumbersInputForm
          cardType={cardType}
          cardNumbers={cardNumbers}
          handleModalVisible={modalSelector(MODAL_NAME.CARD_TYPE)}
          handleCardNumbersInput={setCardNumbers}
          handleCardNumberCheck={setCheckInputStateOf("cardNumbers")}
        />
        <CardExpireDateInputForm
          expireDate={expireDate}
          handleExpireDateInput={setExpireDate}
          handleCardExpireCheck={setCheckInputStateOf("cardExpireDate")}
        />
        <CardOwnerInputForm
          ownerName={ownerName}
          handleOwnerNameInput={setOwnerName}
        />
        <CVCInputForm
          handleCardCVCCheck={setCheckInputStateOf("cardCVC")}
          handleModalVisible={modalSelector(MODAL_NAME.CARD_CVC)}
        />
        <CardPasswordInputForm
          handleCardPasswordCheck={setCheckInputStateOf("cardPassword")}
        />
        <Button type="submit" disabled={!allCompleted}>
          다음
        </Button>
      </Form>
      <Modal
        visible={modalVisibleState}
        handleVisible={() => setModalState(false)}
      >
        {modalVisibleState && loadModal()}
      </Modal>
    </>
  );
};
