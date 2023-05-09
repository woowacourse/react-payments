import React from 'react';
import styled from 'styled-components';
import Modal from 'turtle601-modal-like-chakra-ui';
import CardCompanies from '../../organisms/CardCompanies';

const AddCardModal: React.FC = () => {
  return (
    <>
      <Modal.Overlay />
      <Modal.Content isBottom isCustom>
        <StyledContent>
          <Modal.Body>
            <CardCompanies />
          </Modal.Body>
        </StyledContent>
      </Modal.Content>
    </>
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
