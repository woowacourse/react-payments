import { useState } from "react";

const useCanShowModal = () => {
  const [canShowModal, setCanShowModal] = useState(false);

  const toggleModal = () => {
    setCanShowModal((prevCanShowModal) => !prevCanShowModal);
  };

  return [canShowModal, toggleModal];
};

export default useCanShowModal;
