import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.25s ease;
  z-index: 2;
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
  width: 100%;
  min-height: 270px;
  margin: auto;
  overflow: auto;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;
`;

const Modal = ({ onCloseModal, children }) => {
  const onClickModalDimmed = (e) => {
    if (e.target !== e.currentTarget) return;

    onCloseModal();
  };
  return (
    <ModalWrapper onClick={onClickModalDimmed}>
      <ModalInner>{children}</ModalInner>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
