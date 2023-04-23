import React from 'react';
import styled from 'styled-components';
import CardItem from '../../molecules/CardItem';

const CardList: React.FC = () => {
  return (
    <CardPreviewListWrapper>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardPreviewListWrapper>
  );
};

const CardPreviewListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-top: 44px;
  }
`;

export default CardList;
