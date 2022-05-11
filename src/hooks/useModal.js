import { useState } from "react";

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return { modalVisible, openModal, closeModal };
};

export default useModal;
