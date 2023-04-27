import React, { useMemo } from "react";
import CardNumber from "src/components/registerForm/CardNumber";
import ExpireDate from "src/components/registerForm/ExpireDate";
import OwnerNameInput from "src/components/registerForm/OwnerNameInput";
import SecurityCode from "src/components/registerForm/SecurityCode";
import CardPassword from "src/components/registerForm/CardPassword";
import { Styled as S } from "./CardRegisterForm.styles";
import Card from "src/components/@common/Card";
import Modal from "src/components/@common/Modal";
import CardCompany from "../CardCompany";
import useModal from "src/hooks/useModal";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";

function CardRegisterForm() {
  const { cardInfo, onSubmit, isValidateInfo } = useRegisterCardInfo();

  const { cardNumbers, expireDate, cardName, ownerName } = cardInfo;

  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

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
      <S.Form onSubmit={onSubmit}>
        <CardNumber />
        <ExpireDate />
        <OwnerNameInput />
        <SecurityCode />
        <CardPassword />
        {isValidateInfo && (
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
