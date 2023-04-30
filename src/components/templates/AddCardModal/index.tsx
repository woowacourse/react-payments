import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useCardModalDispatch, useCardModalState } from '../../../hooks/useContextHooks';

import CardCompanies from '../../organisms/CardCompanies';

const AddCardModal: React.FC = () => {
  const isModal = useCardModalState();
  const toggleModal = useCardModalDispatch();

  return (
    <>
      {isModal &&
        createPortal(
          <>
            <StyledBackDrop onClick={toggleModal} />
            <CardCompaniesWrapper>
              <CardCompanies />
            </CardCompaniesWrapper>
          </>,
          document.body,
        )}
    </>
  );
};

const StyledBackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const CardCompaniesWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default AddCardModal;
