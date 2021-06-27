import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModalDimmed = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return { isModalOpen, setIsModalOpen, onClickModalDimmed };
};

export default useModal;
