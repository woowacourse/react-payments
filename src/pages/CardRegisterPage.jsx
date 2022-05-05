import React, { useState, useEffect } from "react";
import { useModal } from "hooks/useModal";

import { Button, Card, Modal, PageTitle } from "components/common";
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
import { Form } from "components/common/Form";

export const CardRegisterPage = () => {
  const { modalVisibleState, setModalState, modalName } = useModal();
  const [ownerName, setOwnerName] = useState("");
  const [CVC, setCVC] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);
  const [expireDate, setExpireDate] = useState({
    month: "",
    year: "",
  });
  const [password, setPassword] = useState({
    firstNumber: "",
    secondNumber: "",
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
  }, [checkInputs]);

  useEffect(() => {
    if (!checkInputs.cardNumbers) {
      setCheckInputs((prev) => ({ ...prev, cardType: false }));
      setCardType(() => CARD_TYPES_DEFAULT);
    }
  }, [checkInputs.cardNumbers]);

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

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <Card
        cardType={cardType}
        cardNumbers={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        handleModalVisible={modalSelector(MODAL_NAME.CARD_TYPE)}
      />
      <Form>
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
          CVC={CVC}
          handleCVCInput={setCVC}
          handleCardCVCCheck={setCheckInputStateOf("cardCVC")}
          handleModalVisible={modalSelector(MODAL_NAME.CARD_CVC)}
        />
        <CardPasswordInputForm
          password={password}
          handlePasswordInput={setPassword}
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
