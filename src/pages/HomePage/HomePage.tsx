import React from 'react';
import styled from 'styled-components';
import { AddCardButton } from '../../components/addCardPage/AddCardButton';
import { Card } from '../../components/common/Card';
import { type CardInfo, type PageInfo } from '../../types/types';

interface HomePageProps {
  cardList: CardInfo[];
  setCardList: (data: CardInfo[]) => void;
  setPage: React.Dispatch<React.SetStateAction<PageInfo>>;
}

export default function HomePage({
  cardList,
  setPage,
  setCardList,
}: HomePageProps) {
  const onAddCardClick = () => {
    setPage('addCardPage');
  };

  const onDeleteClick = (index: number) => {
    const result = window.confirm('등록하신 카드를 정말 삭제하시겠습니까?');

    if (result) {
      const updatedCardList = [
        ...cardList.slice(0, index),
        ...cardList.slice(index + 1),
      ];

      setCardList(updatedCardList);
    }
  };

  return (
    <Page>
      <Title>보유카드 {cardList.length > 0 && `(${cardList.length}개)`}</Title>
      {cardList?.length === 0 && (
        <AddInformation>새로운 카드를 등록해주세요.</AddInformation>
      )}
      <CardWrapper>
        {cardList?.map((card, index) => (
          <Card
            companyKind={card.company}
            title={card.title}
            key={card.id}
            owner={card.owner}
            cardNumberSet={Object.values(card.cardNumber)}
            month={card.expirationDate.month}
            year={card.expirationDate.year}
            onDeleteClick={() => onDeleteClick(index)}
          />
        ))}
        <AddCardButton onAddCardClick={onAddCardClick} />
      </CardWrapper>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 36px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const AddInformation = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  opacity: 0.9;
  margin-top: 33px;
  margin-bottom: 9px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
  gap: 46px;
`;
