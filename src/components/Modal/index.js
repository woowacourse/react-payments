import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const Modal = ({ handleModalClose, children }) => {
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) return;

    handleModalClose();
  };

  return (
    <Styled.Modal onClick={closeModal}>
      <Styled.ModalInner>{children}</Styled.ModalInner>
    </Styled.Modal>
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
  ]),
};
