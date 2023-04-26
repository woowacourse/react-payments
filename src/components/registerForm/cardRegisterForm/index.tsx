import React, { useContext, useMemo } from "react";
import CardNumber from "src/components/registerForm/cardNumber";
import ExpireDate from "src/components/registerForm/expireDate";
import OwnerNameInput from "src/components/registerForm/ownerNameInput";
import SecurityCode from "src/components/registerForm/securityCode";
import CardPassword from "src/components/registerForm/cardPassword";
import { CardInfoContext } from "src/context/CardInfoContext";
import { useNavigate } from "react-router-dom";
import { Styled as S } from "./CardRegisterForm.styles";
import Card from "src/components/@common/card";
import Modal from "src/components/@common/Modal";
import CardCompany from "../cardCompany";
import useModal from "src/hooks/useModal";
import { isValidateFormValues } from "src/utils/validation";
import { PATHS } from "src/utils/constant";

function CardRegisterForm() {
  const navigation = useNavigate();
  const [cardInfo] = useContext(CardInfoContext);

  const { cardNumbers, expireDate, cardName, ownerName } = cardInfo;

  const { isModalOpen, setIsModalOpen, modalRef } = useModal();

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
        onClick={() => setIsModalOpen(true)}
      />
    ),
    [cardNumbers, expireDate, ownerName, cardName, setIsModalOpen],
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
        <Modal closeEvent={() => setIsModalOpen(false)} dialogRef={modalRef}>
          <CardCompany closeEvent={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
}

export default CardRegisterForm;
