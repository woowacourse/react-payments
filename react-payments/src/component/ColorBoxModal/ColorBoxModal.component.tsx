import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import Modal from "component/common/Modal/Modal.component";
import { DispatchWithoutAction } from "react";
import ModalPortal from "../common/ModalPortal/ModalPortal.component";

const ColorBoxModal = ({
  toggleModal,
}: {
  toggleModal: DispatchWithoutAction;
}) => {
  return (
    <ModalPortal>
      <Modal toggleModal={toggleModal}>
        <CardTypeSelector />
      </Modal>
    </ModalPortal>
  );
};

export default ColorBoxModal;
