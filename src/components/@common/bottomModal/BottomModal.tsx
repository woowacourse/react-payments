import React, { useEffect } from 'react';
import { StyleBackDrop, StyleContainer } from './BottomModal.style';

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
      <StyleBackDrop
        className="modal-backdrop"
        onClick={() => {
          onClose();
        }}
      ></StyleBackDrop>
      <StyleContainer>{children}</StyleContainer>
    </>
  ) : null;
};

export default BottomModal;
