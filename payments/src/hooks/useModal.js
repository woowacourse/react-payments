import { useState } from "react";
import Modal from "../components/common/Modal";
import Portal from "../Portal";

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [node, setNode] = useState(null);
  const closeModal = () => {
    setVisible(false);
  };

  const setElement = (element) => {
    setVisible(true);
    setNode(element);
  };

  const ModalElement = () => {
    return (
      visible && (
        <Portal>
          <Modal closeModal={closeModal}>{node}</Modal>
        </Portal>
      )
    );
  };

  return [closeModal, ModalElement, setElement];
};

export default useModal;
