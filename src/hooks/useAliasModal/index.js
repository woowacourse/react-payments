import React, { useState } from 'react';

import AliasModal from './AliasModal';

const useAliasModal = ({ afterClick }) => {
  const [visible, setVisible] = useState(false);
  const [card, setCard] = useState([]);

  const Modal = () => <AliasModal visible={visible} afterClick={afterClick}>{card}</AliasModal>;
  const onModal = (newCard) => {
    setCard(newCard);
    setVisible(true);
  };
  const offModal = () => setVisible(false);

  return [Modal, onModal, offModal];
};

export default useAliasModal;
