import React, { useState } from "react";
import Modal from "../components/common/Modal";
import Portal from "../Portal";

const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [node, setNode] = useState<React.ReactNode>(null);
  const closeModal = () => {
    setVisible(false);
  };

  const setElement = (element?: React.ReactNode) => {
    setVisible(true);
    setNode(element);
  };

  const ModalElement = (): React.ReactElement =>
    visible ? (
      <Portal>
        <Modal closeModal={closeModal}>{node}</Modal>
      </Portal>
    ) : (
      <></>
    );

  return { closeModal, ModalElement, setElement };
};

export default useModal;
