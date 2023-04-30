import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import CardCompanies from '../../organisms/CardCompanies';

interface AddCardModalProps {
  isModal: boolean;
}

const AddCardModal: React.FC<AddCardModalProps> = ({ isModal }) => {
  return (
    <>
      {isModal &&
        createPortal(
          <>
            <StyledBackDrop />
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
