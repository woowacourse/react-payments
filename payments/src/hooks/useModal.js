import { useState } from "react";
import Modal from "../components/common/Modal";
import Portal from "../Portal";

const useModal = (element) => {
  const [visible, setVisible] = useState(false);

  const closeModal = () => {
    setVisible(false);
  };
  const ModalElement = () => {
    return (
      visible && (
        <Portal>
          <Modal closeModal={closeModal}>{element}</Modal>
        </Portal>
      )
    );
  };

  return [setVisible, ModalElement];
};

export default useModal;
