import React from 'react';

import styled from 'styled-components';

const GridColumnsStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`;
const ModalItemContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalItemDotStyle = styled.div`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${(props) => props.backgroundColor || '#94daca'};
  cursor: pointer;
`;
const ModalItemNameStyle = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
  cursor: pointer;
`;

export const CardSelectModal = ({
  cardTypes,
  handleVisible,
  handleCardType,
  handleCardTypeCheck,
}) => {
  const handleCardTypeSelect = (card) => {
    handleCardType(card);
    handleCardTypeCheck(true);
    handleVisible();
  };

  return (
    <GridColumnsStyle col={4}>
      {cardTypes.map((card) => (
        <ModalItemContainerStyle
          key={card.name}
          onClick={() => handleCardTypeSelect(card)}
        >
          <ModalItemDotStyle backgroundColor={card.color} />
          <ModalItemNameStyle>{card.name} 카드</ModalItemNameStyle>
        </ModalItemContainerStyle>
      ))}
    </GridColumnsStyle>
  );
};
