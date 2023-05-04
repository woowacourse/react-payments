import { useMemo } from "react";
import Card from "src/components/@common/Temp";
import Layout from "src/components/@common/Layout";
import Modal from "src/components/@common/Modal";
import CardCompany from "src/components/registerForm/Company";
import CardRegisterForm from "src/components/registerForm/Form";
import useModal from "src/hooks/useModal";
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
