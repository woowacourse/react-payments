import React, { useEffect, useState } from 'react';
import AddCard from 'components/card/AddCard';
import axios from 'axios';
import Card from 'components/card/Card';
import styled from '@emotion/styled';

export type CardType = {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  ownerName: string;
  month: string;
  year: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
  type: string;
  alias: string;
};

const CardAlias = styled.p(() => ({
  fontWeight: '800',
  marginBottom: '30px',
  textAlign: 'center',
}));

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

function CardListContainer() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getCards() {
      const response = await axios('http://localhost:4004/cards', {
        method: 'get',
      });
      // 에러처리
      setCardList(response.data);
    }

    getCards();
  }, []);

  const handleCardModify = () => {
    console.log('handleCardModify');
  };

  return (
    <Wrapper>
      {cardList.length > 0 ? (
        cardList.map((card: CardType, index: number) => (
          <div key={index}>
            <Card
              firstInputCardNumber={card.firstCardNumber}
              secondInputCardNumber={card.secondCardNumber}
              thirdInputCardNumber={card.thirdCardNumber}
              fourthInputCardNumber={card.fourthCardNumber}
              name={card.ownerName ? card.ownerName : ''}
              expiredPeriodMonth={card.month}
              expiredPeriodYear={card.year}
              cardType={card.type}
              handleCardClick={handleCardModify}
            />
            <CardAlias>{card.alias}</CardAlias>
          </div>
        ))
      ) : (
        <></>
      )}
      <AddCard />
    </Wrapper>
  );
}

export default CardListContainer;
