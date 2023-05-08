import React from 'react';
import styled from 'styled-components';
import Message from '../../components/atomics/Message';
import { VStack } from '../../components/layout/flexbox';
import CardItem from '../../components/molecules/CardItem';
import Header from '../../components/molecules/Header';
import CardRegister from '../../components/organisms/CardRegister';
import { useQuery } from '../../hooks/useQuery';
import { Card } from '../../store/type';
import { URL } from '../../utils/constant';
import Loading from '../Loading';
import NotFound from '../NotFound';

const MyCard: React.FC = () => {
  const [fetchingData, isLoading, isError] = useQuery<Card[]>(URL);

  if (isError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MyCardWrapper>
      <Header title="보유카드" />
      <CardListWrapper>
        {fetchingData.map((cardItem) => {
          return (
            <CardItemWrapper key={cardItem.id}>
              <CardItem key={cardItem.id} card={cardItem} />
              <Message
                fontWeight={700}
                fontSize="14px"
                lineHeight="16px"
                color="#575757"
                opacity={0.9}
              >
                {cardItem.nickName}
              </Message>
            </CardItemWrapper>
          );
        })}
      </CardListWrapper>
      <CardRegister />
    </MyCardWrapper>
  );
};

const MyCardWrapper = styled.div`
  div + div {
    margin-top: 44px;
  }
`;

const CardItemWrapper = styled.div`
  ${VStack}
  align-items: center;

  div + span {
    margin-top: 12px;
  }
`;

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 44px;
  }
`;

export default MyCard;
