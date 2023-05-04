import { useMemo } from "react";
import Card from "src/components/@common/Card";
import Layout from "src/components/@common/Layout";
import { Modal, useModal } from "@hozzijeong/react-modal";
import CardCompany from "src/components/registerForm/CardCompany";
import CardRegisterForm from "src/components/registerForm/CardRegisterForm";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";

function CardRegister() {
  const { cardInfo } = useRegisterCardInfo();

  const { cardNumbers, expireDate, cardName, ownerName } = cardInfo;

  const { openModal, closeModal, isModalOpen } = useModal();

  const cardPreview = useMemo(
    () => (
      <Card
        cardName={cardName}
        cardNumber={cardNumbers}
        expireDate={expireDate}
        ownerName={ownerName}
        onClick={openModal}
        isOpen={isModalOpen}
      />
    ),
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
