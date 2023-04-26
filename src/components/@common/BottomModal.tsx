import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<void>>;
}

const BottomModal = ({ isOpen, onClose, children }: Props) => {
  useEffect(() => {
    const handleKeyupEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keyup', handleKeyupEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keyup', handleKeyupEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return isOpen ? (
    <>
      <Backdrop
        className="modal-backdrop"
        onClick={() => {
          onClose();
        }}
      ></Backdrop>
      <Container>{children}</Container>
    </>
  ) : null;
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  box-sizing: border-box;

  padding: 32px 16px;

  border: 0;

  border-radius: 8px 8px 0px 0px;
  background: white;
`;

export default BottomModal;
