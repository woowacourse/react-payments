import React, { useState, useEffect } from "react";

import { Button, Card, Modal, PageTitle } from "../components/common";
import {
  CardExpireDateInputForm,
  CardNumbersInputForm,
  CardOwnerInputForm,
  CardPasswordInputForm,
  CVCInputForm,
  CardSelectModal,
  CVCHelperModal,
} from "../components/cardRegister";

const CARD_TYPES = [
  { name: "포코", color: "gold" },
  { name: "준", color: "#04c09e" },
  { name: "공원", color: "green" },
  { name: "후이", color: "#9198e5" },
  { name: "유세지", color: "#AB46D2" },
  { name: "마르코", color: "#E76E9A" },
  { name: "아놀드", color: "#FF5F00" },
  { name: "록바", color: "#FBCD58" },
];

export const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState({
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  });

  const [expireDate, setExpireDate] = useState({
    month: "",
    year: "",
  });

  const [ownerName, setOwnerName] = useState("");

  const [CVC, setCVC] = useState("");

  const [password, setPassword] = useState({
    firstNumber: "",
    secondNumber: "",
  });

  const [cardType, setCardType] = useState({
    name: "",
    backgroundColor: "",
  });

  const [modalVisible, setModalVisible] = useState("");

  const modalSelector = (subject) => {
    return () => setModalVisible(subject);
  };

  const [checkInputs, setCheckInputs] = useState({
    cardNumbers: false,
    cardExpireDate: false,
    cardCVC: false,
    cardPassword: false,
    cardType: false,
  });

  const setCheckInputStateOf = (state) => {
    return (isCompleted) => {
      setCheckInputs((prev) => ({ ...prev, [state]: isCompleted }));
    };
  };

  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    setAllCompleted(Object.values(checkInputs).every((check) => check));
  }, [checkInputs]);

  const loadModal = () => {
    switch (modalVisible) {
      case "cardType":
        return (
          <CardSelectModal
            cardTypes={CARD_TYPES}
            handleVisible={() => setModalVisible("")}
            handleCardType={setCardType}
            handleCardTypeCheck={setCheckInputStateOf("cardType")}
          />
        );
      case "cardCVC":
        return <CVCHelperModal />;
      default:
        return <div>no data</div>;
    }
  };

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        handleModalVisible={modalSelector("cardType")}
      />
      <CardNumbersInputForm
        cardType={cardType}
        cardNumbers={cardNumbers}
        handleModalVisible={modalSelector("cardType")}
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
        CVC={CVC}
        handleCVCInput={setCVC}
        handleCardCVCCheck={setCheckInputStateOf("cardCVC")}
        handleModalVisible={modalSelector("cardCVC")}
      />
      <CardPasswordInputForm
        password={password}
        handlePasswordInput={setPassword}
        handleCardPasswordCheck={setCheckInputStateOf("cardPassword")}
      />
      <Modal visible={modalVisible} handleVisible={() => setModalVisible("")}>
        {modalVisible && loadModal()}
      </Modal>

      <Button disabled={allCompleted ? false : true}>다음</Button>
    </>
  );
};
