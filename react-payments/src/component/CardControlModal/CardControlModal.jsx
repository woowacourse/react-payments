import ModalPortal from "component/common/ModalPortal/ModalPortal.component";
import Modal from "component/common/Modal/Modal.component";
import CardControlButtonBox from "component/CardControlButtonBox/CardControlButtonBox.component";

const CardControlModal = ({
  toggleModal,
  type,
  handleEditCard,
  handleDeleteCard,
}) => {
  return (
    <ModalPortal>
      <Modal toggleModal={toggleModal} type={type}>
        <CardControlButtonBox
          handleEditCard={handleEditCard}
          handleDeleteCard={handleDeleteCard}
        />
      </Modal>
    </ModalPortal>
  );
};

export default CardControlModal;
