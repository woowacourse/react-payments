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
    <CardInfoProvider>
      <_AddCardContainer>
        <Header title='카드 추가' render={BackButton} />
        <_Section>
          <CardPreview></CardPreview>
          <CardRegisterForm></CardRegisterForm>
          <_CompanySelectButton onClick={handleClickButton}>
            카드 회사 고르기
          </_CompanySelectButton>
        </_Section>
      </_AddCardContainer>
      {isModalOpen && (
        <CardCompanySelectModal
          onModalClose={setIsModalOpen}
        ></CardCompanySelectModal>
      )}
    </CardInfoProvider>
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
  position: fixed;
  bottom: 0;
  width: 50%;
  padding: 0.8rem;
  border-radius: 1rem 1rem 0 0;

  color: black;
  background-color: #a1d5f2;
`;
