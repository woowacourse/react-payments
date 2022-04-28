import React from 'react';

import { Modal } from './Modal';

export const ModalSelector = ({ children, selected, closeModal }) => {
  const selectedComponent = children.find(
    (component) => component.props.name === selected
  );

  return (
    <Modal visible={selected} closeModal={closeModal}>
      {selected && selectedComponent}
    </Modal>
  );
};
