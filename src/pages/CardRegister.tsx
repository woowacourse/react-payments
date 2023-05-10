import { useMemo } from "react";
import Card from "src/components/@common/Card";
import Layout from "src/components/@common/Layout";
import { Modal, useModal } from "@hozzijeong/react-modal";
import CardCompany from "src/components/registerForm/CardCompany";
import CardRegisterForm from "src/components/registerForm/CardRegisterForm";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";
import { getBankListName } from "src/utils";
import styled from "styled-components";
import ErrorSpan from "src/components/@common/ErrorSpan";

function CardRegister() {
  const { cardInfo } = useRegisterCardInfo();

  const { cardNumbers, expireDate, cardName, ownerName } = cardInfo;

  const { openModal, closeModal, isModalOpen } = useModal();

  const cardPreview = useMemo(
    () => 
      { 
        const name = getBankListName(cardName)
        return (
        <CardContainer>
          <Card
            cardName={cardName} 
            cardNumber={cardNumbers}
            expireDate={expireDate}
            ownerName={ownerName}
            onClick={openModal}
            isOpen={isModalOpen}
          />
          {!name && <ErrorSpan>카드를 클릭해서 카드사를 선택해주세요</ErrorSpan>}
        </CardContainer>)}
    ,
    [cardNumbers, expireDate, ownerName, cardName, openModal, isModalOpen],
  );
  return (
    <Layout>
      {cardPreview}
      <CardRegisterForm />
      {isModalOpen && (
        <Modal closeEvent={closeModal} direction="bottom">
          <CardCompany closeEvent={closeModal} />
        </Modal>
      )}
    </Layout>
  );
}

export default CardRegister;

const CardContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`