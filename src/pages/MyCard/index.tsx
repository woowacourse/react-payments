import React from 'react';
import styled from 'styled-components';
import Header from '../../components/molecules/Header';
import CardList from '../../components/organisms/CardList';
import CardRegister from '../../components/organisms/CardRegister';

const MyCard: React.FC = () => {
  return (
    <MyCardWrapper>
      <Header title="보유카드" />
      <CardList />
      <CardRegister />
    </MyCardWrapper>
  );
};

const MyCardWrapper = styled.div`
  div + div {
    margin-top: 44px;
  }
`;

export default MyCard;
