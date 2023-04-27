import { useMemo } from "react";
import Card from "src/components/@common/Card";
import Layout from "src/components/@common/Layout";
import Modal from "src/components/@common/Modal";
import CardCompany from "src/components/registerForm/CardCompany";
import CardRegisterForm from "src/components/registerForm/CardRegisterForm";
import useModal from "src/hooks/useModal";
import useRegisterCardInfo from "src/hooks/useRegisterCardInfo";

function CardRegister() {
  const { cardInfo } = useRegisterCardInfo();

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
        <Modal closeEvent={closeModal} dialogRef={modalRef}>
          <CardCompany closeEvent={closeModal} />
        </Modal>
      )}
    </Layout>
  );
}

export default CardRegister;
