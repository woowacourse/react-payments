import { useRef } from "react";

import Modal from "@chsua/bottom-modal";

import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import CardCoButton from "../../common/CardCoButton";

import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { CardCo, CreditCard } from "../../../type";
import { CARD_CO_NAME } from "../../../CONSTANT";
import "./cardInputForm.css";

import { useModalState } from "../../../hook/modalHook";
import { useCardInfoAndInputState } from "../../../hook/cardInfoAndInputHook";
import { useLoading } from "../../../hook/spinnerPageHook";

interface CardInputFormProps {
  addNewCard: (card: CreditCard) => void;
}

const style = {
  height: "250px",
  inner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "50px 10%",
    minWidth: "375px",
    rowGap: "20px",
  },
};

export default function CardInputForm(props: CardInputFormProps) {
  const { modalOpen, openModal, closeModal } = useModalState();
  const { startLoading } = useLoading();

  const isFormFilled = useRef(false);
  const { inputStatus, nowCardInfo, changeInputStatus } =
    useCardInfoAndInputState(closeModal);

  const { cardNumber, expirationDate, securityCode, password } = inputStatus;
  isFormFilled.current =
    cardNumber && expirationDate && securityCode && password;

  const { addNewCard } = props;
  const submitCardInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormFilled.current) {
      addNewCard(nowCardInfo);
      startLoading();
    }
  };

  const cardCoList = Object.keys(CARD_CO_NAME) as CardCo[];

  return (
    <form onSubmit={(e) => submitCardInfo(e)} className="form">
      <Modal className="modal" isOpen={modalOpen} style={style}>
        {cardCoList.map((cardCo) => (
          <CardCoButton
            key={cardCo}
            cardCo={cardCo}
            changeCardCoStatus={changeInputStatus("cardCo")}
          />
        ))}
      </Modal>

      <CardPreview card={nowCardInfo} openCardCoModal={openModal} />
      <InputBoxCardNumber
        changeCardNumberStatus={changeInputStatus("cardNumber")}
      />
      <InputBoxExpirationDate
        changeCardExpirationDateStatus={changeInputStatus("expirationDate")}
      />
      <InputBoxOwner changeCardOwnerStatus={changeInputStatus("owner")} />
      <InputBoxSecurityCode
        changeSecurityCodeStatus={changeInputStatus("securityCode")}
      />
      <InputBoxPassword changePasswordStatus={changeInputStatus("password")} />
      <Button
        type="submit"
        style={isFormFilled.current ? {} : { color: "lightgrey" }}
        aria-disabled={!isFormFilled.current}
      >
        다음
      </Button>
    </form>
  );
}
