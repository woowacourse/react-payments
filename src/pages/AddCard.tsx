import { useState, useContext } from 'react';
import styled from 'styled-components';

import { CardCompanySelectModal, CardRegisterForm } from '../components';
import { Header, BackButton, CardItem } from '../components/common';
import { CardPreviewInfoContext } from '../contexts/cardPreviewInfoContext';

export function AddCard() {
  const { cardNumber, expiredDate, username, company } = useContext(
    CardPreviewInfoContext
  );

  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleClickButton() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <_AddCardContainer>
        <Header title='카드 추가' render={BackButton} />
        <_Section>
          <CardItem
            cardNumberFirst={cardNumber.first.value}
            cardNumberSecond={cardNumber.second.value}
            cardNumberThird={cardNumber.third.value}
            cardNumberFourth={cardNumber.fourth.value}
            month={expiredDate.month.value}
            year={expiredDate.year.value}
            username={username.first.value}
            company={company.clicked.value}
          />
          <CardRegisterForm />
          <_CompanySelectButton onClick={handleClickButton}>
            카드사 재선택
          </_CompanySelectButton>
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
  position: fixed;
  bottom: 0;
  width: 50%;
  padding: 0.8rem;
  border-radius: 1rem 1rem 0 0;

  color: black;
  background-color: #a1d5f2;
`;
