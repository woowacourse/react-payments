import React from 'react';
import styled from 'styled-components';
import { useCardModal } from '../../../hooks/useCardModal';
import Modal from '../../common/modal';
import CardCompanies from '../../organisms/CardCompanies';

const AddCardModal: React.FC = () => {
  const [isModal, closeModal, openModal] = useCardModal(true);

  return (
    <Modal isModal={isModal} closeModal={closeModal} openModal={openModal} blockScrollOnMount>
      <Modal.Overlay />
      <Modal.Content isBottom isCustom>
        <StyledContent>
          <Modal.Body>
            <CardCompanies />
          </Modal.Body>
        </StyledContent>
      </Modal.Content>
    </Modal>
  );
};

const StyledContent = styled.div`
  width: 100%;
  height: 240px;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddCardModal;
