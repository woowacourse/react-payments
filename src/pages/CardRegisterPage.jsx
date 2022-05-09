import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "hooks/useModal";
import { CardContext, ErrorContext } from "contexts";

import {
  Button,
  Card,
  Form,
  Modal,
  PageTitle,
  ErrorModal,
} from "components/common";
import {
  CARD_TYPES,
  CARD_TYPES_DEFAULT,
  MODAL_NAME,
} from "constants/constants";
import {
  CardExpireDateInput,
  CardNumbersInput,
  CardOwnerInput,
  CardPasswordInput,
  CVCInput,
  CardSelectModal,
  CVCHelperModal,
} from "components/cardRegister";

export const CardRegisterPage = () => {
  const { modalVisibleState, setModalState, modalName } = useModal();
  const cards = useContext(CardContext);
  const errorState = useContext(ErrorContext);
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
      case MODAL_NAME.ERROR:
        return <ErrorModal />;
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

    try {
      cards.id++;
      cards.list.push(wrappingCardData);
      navigate(`/cardName/${cardId}`);
    } catch (error) {
      errorState.errorMessage = error.message;
      modalSelector(MODAL_NAME.ERROR)();
    }
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
        <CardNumbersInput
          cardType={cardType}
          cardNumbers={cardNumbers}
          isValid={checkInputs.cardNumbers}
          handleModalVisible={modalSelector(MODAL_NAME.CARD_TYPE)}
          handleCardNumbersInput={setCardNumbers}
          handleCardNumberCheck={setCheckInputStateOf("cardNumbers")}
        />
        <CardExpireDateInput
          expireDate={expireDate}
          isValid={checkInputs.cardExpireDate}
          handleExpireDateInput={setExpireDate}
          handleCardExpireCheck={setCheckInputStateOf("cardExpireDate")}
        />
        <CardOwnerInput
          ownerName={ownerName}
          handleOwnerNameInput={setOwnerName}
        />
        <CVCInput
          isValid={checkInputs.cardCVC}
          handleCardCVCCheck={setCheckInputStateOf("cardCVC")}
          handleModalVisible={modalSelector(MODAL_NAME.CARD_CVC)}
        />
        <CardPasswordInput
          isValid={checkInputs.cardPassword}
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
