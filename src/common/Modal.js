import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants/style';

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLOR.MODAL.BG};
  transition: opacity 0.25s ease;
  z-index: 2;
`;

const ModalInner = styled.div`
  transition: top 0.25s ease;
  width: 100%;
  height: 270px;
  margin: auto;
  overflow: auto;
  background: ${COLOR.MAIN.WHITE};
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
  }
`;

// const ModalClose = styled.div`
//   margin: 20px;
//   width: 20px;
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   cursor: pointer;

//   .close-x {
//     stroke: gray;
//     fill: transparent;
//     stroke-linecap: round;
//     stroke-width: 5;
//   }
// `;

const Modal = ({ handleModalClose, children }) => {
  const onClickModalDimmed = (e) => {
    if (e.target !== e.currentTarget) return;

    handleModalClose();
  };
  return (
    <ModalWrapper onClick={onClickModalDimmed}>
      <ModalInner>{children}</ModalInner>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
