import React, { useContext, useMemo } from "react";
import CardNumber from "src/components/registerForm/CardNumber";
import ExpireDate from "src/components/registerForm/ExpireDate";
import OwnerNameInput from "src/components/registerForm/OwnerNameInput";
import SecurityCode from "src/components/registerForm/SecurityCode";
import CardPassword from "src/components/registerForm/CardPassword";
import { CardInfoContext } from "src/context/CardInfoContext";
import { useNavigate } from "react-router-dom";
import { Styled as S } from "./CardRegisterForm.styles";
import Card from "src/components/@common/Card";
import Modal from "src/components/@common/Modal";
import CardCompany from "../CardCompany";
import useModal from "src/hooks/useModal";
import { isValidateFormValues } from "src/utils/validation";
import { PATHS } from "src/utils/constant";

function CardRegisterForm() {
  const navigation = useNavigate();
  const [cardInfo] = useContext(CardInfoContext);

  const { cardNumbers, expireDate, cardName, ownerName } = cardInfo;

  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

  const cardInputSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigation(PATHS.cardNickName, { state: cardInfo });
  };

  const isValidateValues = isValidateFormValues(cardInfo);

  const cardPreview = useMemo(
    () => (
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        onClick={openModal}
      />
    ),
    [cardNumbers, expireDate, ownerName, cardName, openModal],
  );

  return (
    <>
      {cardPreview}
      <S.Form onSubmit={cardInputSubmit}>
        <CardNumber />
        <ExpireDate />
        <OwnerNameInput />
        <SecurityCode />
        <CardPassword />
        {isValidateValues && (
          <S.ButtonContainer>
            <S.NextButton>다음</S.NextButton>
          </S.ButtonContainer>
        )}
      </S.Form>
      {isModalOpen && (
        <Modal closeEvent={closeModal} dialogRef={modalRef}>
          <CardCompany closeEvent={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default CardRegisterForm;
