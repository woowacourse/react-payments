import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
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

// Modal.propTypes = {};

// Modal.defaultProps = {};
