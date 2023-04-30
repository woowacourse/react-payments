import { useState } from 'react';

export const useCardModal = (): [boolean, () => void] => {
  const [isModal, setModal] = useState<boolean>(true);

  const toggleModal = () => {
    setModal(!isModal);
  };

  return [isModal, toggleModal];
};
