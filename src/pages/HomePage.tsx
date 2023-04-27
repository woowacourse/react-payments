import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CardInfo, PageInfo } from '../types';
import Card from '../components/card/Card';
import AddCardButton from '../components/card/button/AddCardButton';

interface HomePageProps {
  cardList: CardInfo[];
  setCardList: (data: CardInfo[]) => void;
  setPage: React.Dispatch<React.SetStateAction<PageInfo>>;
}

export default function Homepage({
  cardList,
  setPage,
  setCardList,
}: HomePageProps) {
  const onAddClick = () => {
    setPage('addCardPage');
  };

  const onDeleteClick = (index: number) => {
    const result = window.confirm('정말 삭제하시겠습니까?');

    if (result) {
      const updatedCardList = [
        ...cardList.slice(0, index),
        ...cardList.slice(index + 1),
      ];

      setCardList(updatedCardList);
    }
  };

  const onCloseApp = () => {
    window.history.pushState(null, '', window.location.href);
    const result = window.confirm('정말 종료하시겠습니까?');
    if (result) {
      console.log('H');
      // window.history.back();
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
            bankKind={card.bank}
            title={card.title}
            key={card.id}
            owner={card.owner}
            cardNumberSet={Object.values(card.cardNumber)}
            month={card.expiracy.month}
            year={card.expiracy.year}
            onDeleteClick={() => onDeleteClick(index)}
          />
        ))}
        <AddCardButton onClick={onAddClick} />
      </CardWrapper>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 36px;
  background-color: #fff;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;

const AddInformation = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #575757;
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
