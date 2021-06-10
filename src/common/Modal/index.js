import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, ModalInner } from './index.styles';

const Modal = ({ isModalOpen, onClickModalDimmed, children }) => {
  return (
    <>
      {isModalOpen && (
        <ModalWrapper onClick={onClickModalDimmed}>
          <ModalInner>{children}</ModalInner>
        </ModalWrapper>
      )}
    </>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  onClickModalDimmed: PropTypes.func,
  children: PropTypes.object.isRequired,
};

export default Modal;
