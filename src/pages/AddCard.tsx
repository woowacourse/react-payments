import { useState } from 'react';
import styled from 'styled-components';

import { CardCompanySelectModal, CardRegisterForm } from '../components';
import { Header, BackButton, CardPreview } from '../components/common';
import { CardInfoProvider } from '../contexts/cardInfo';

export function AddCard() {
  function handleClickButton() {
    setIsModalOpen(!isModalOpen);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <_AddCardContainer>
        <Header title='카드 추가' render={BackButton} />
        <_Section>
          <CardInfoProvider>
            <CardPreview></CardPreview>
            <CardRegisterForm></CardRegisterForm>
            <_CompanySelectButton onClick={handleClickButton}>
              카드 회사 고르기
            </_CompanySelectButton>
          </CardInfoProvider>
        </_Section>
      </_AddCardContainer>
      {isModalOpen && (
        <CardCompanySelectModal
          onModalClose={setIsModalOpen}
        ></CardCompanySelectModal>
      )}
    </>
  );
}

const _AddCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin: 2rem;
`;

const _Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _CompanySelectButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;

  color: white;
  background-color: blue;
`;
