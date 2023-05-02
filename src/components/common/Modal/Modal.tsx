import React, { type PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Z_INDEX_INFO } from '@constants/constant';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  ariaLabel?: string;
}

export default function Modal({
  isOpen,
  onClose,
  ariaLabel,
  children,
}: ModalProps) {
  return (
    <Wrapper isOpen={isOpen} aria-label={ariaLabel}>
      <Overlay onClick={onClose} />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX_INFO.MODAL};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.modalBlack};
  opacity: 0.5;
`;
