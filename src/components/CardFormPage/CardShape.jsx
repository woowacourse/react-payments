import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../common/Card';
import CardCompany from '../common/CardCompany';
import Modal from '../common/Modal';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

const cardCompanyList = [
  { color: '#E24141', name: '포코 카드' },
  { color: '#547CE4', name: '준 카드' },
  { color: '#73BC6D', name: '공원 카드' },
  { color: '#DE59B9', name: '브랜 카드' },
  { color: '#04C09E', name: '로이드 카드' },
  { color: '#E76E9A', name: '도비 카드' },
  { color: '#F37D3B', name: '콜린 카드' },
  { color: '#FBCD58', name: '썬 카드' },

  { color: '#66adff', name: '태태 카드' },
  { color: '#cc1b32', name: '콜라 카드' },
  { color: '#69ff66', name: '비녀 카드' },
  { color: '#000', name: '동키콩 카드' },
  { color: '#ff5100', name: '꼬재 카드' },
  { color: '#192dff', name: '블링 카드' },
];

function CardShape({ cardNumber, cardOwnerName, cardDate, dimensions, setCardCompany, cardCompany }) {
  const [isShown, setIsShown] = useState(false);

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickCompany = ({ color: hexColor, name }) => {
    setCardCompany({
      hexColor,
      name,
    });
    setIsShown(!isShown);
  };

  return (
    <CardContainer>
      <Card
        handleClickBox={handleClickBox}
        cardCompany={cardCompany}
        cardNumber={cardNumber}
        cardOwnerName={cardOwnerName}
        cardDate={cardDate}
      />
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <GridContainer>
          {cardCompanyList.map(({ color, name }, index) => (
            <CardCompany
              hexColor={color}
              name={name}
              key={index}
              handleClick={() => handleClickCompany({ color, name })}
            />
          ))}
        </GridContainer>
      </Modal>
    </CardContainer>
  );
}

export default CardShape;
