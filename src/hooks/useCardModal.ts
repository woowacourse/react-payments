import React, { useState } from "react";

const useModal = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const showModal = () => {
    setIsModalShow(true);
  };

  const hideModal = () => {
    setIsModalShow(false);
  };

  return {
    isModalShow,
    showModal,
    hideModal,
  };
};

export default useModal;
