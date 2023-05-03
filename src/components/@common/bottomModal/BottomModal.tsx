import React, { useEffect } from 'react';
import { StyleBackDrop, StyleContainer } from './BottomModal.style';
import Backdrop from './Backdrop';

interface Props extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<void>>;
}

const BottomModal = ({ isOpen, onClose, children }: Props) => {
  return isOpen ? (
    <>
      <Backdrop onClose={onClose}></Backdrop>
      <StyleContainer>{children}</StyleContainer>
    </>
  ) : null;
};

export default BottomModal;
