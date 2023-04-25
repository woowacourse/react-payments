import { useModal } from 'hooks/useModal';
import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
display: block;
`;

const ModalBackDrop = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(0, 0, 0, 0.35); 
`;
const ModalContent = styled.div`
position: fixed;
bottom: 0;
width: 370px;
padding: 32px 16px;
border-radius: 8px 8px 0px 0px;
background: #ffffff;
`;

function Modal() {
  const { modalOpen, closeModal } = useModal();
  return (
    <>
      {
        modalOpen && (
          <ModalContainer>
            <ModalBackDrop onClick={() => closeModal()} />
            <ModalContent>
              <div>dd</div>
            </ModalContent>
          </ModalContainer>
        )
      }
      <div />
    </>
  );
}

export default Modal;
