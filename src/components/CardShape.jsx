import React, { useState } from 'react';
import styled from 'styled-components';
import CardCompany from './common/CardCompany';
import Modal from './common/Modal';
import { Span } from './common/styled';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${props => props.hexColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => `${props.hexColor}cc`};
  }
`;

const CardHeader = styled.div``;
const CardChip = styled.div`
  width: 45px;
  height: 25px;
  margin: 8px;
  border-radius: 10%;
  background-color: #cbba64;
`;
const CardBottom = styled.div``;
const CardNumber = styled.div``;
const CardInfo = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
const CardParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${props => props.width}px;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  overflow-y: auto;
`;

const cardCompanyList = [
  { color: '#E24141', name: '포코 카드' },
  { color: '#547CE4', name: '준 카드' },
  { color: '#73BC6D', name: '공원 카드' },
  { color: '#DE59B9', name: '브랜 카드' },
  { color: '#04C09E4F', name: '로이드 카드' },
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

function CardShape({ cardNumber, cardOwnerName, cardDate, dimensions }) {
  const [isShown, setIsShown] = useState(false);
  const [hexColor, setHexColor] = useState('');
  const [cardCompanyName, setCardCompanyName] = useState('');

  const handleClickBox = () => {
    setIsShown(!isShown);
  };
  const handleClickCompany = ({ color, name }) => {
    setHexColor(color);
    setCardCompanyName(name);
    setIsShown(!isShown);
  };

  return (
    <CardContainer>
      <CardBox onClick={handleClickBox} hexColor={hexColor}>
        <CardHeader>
          <Span>{cardCompanyName}</Span>
        </CardHeader>
        <CardChip />
        <CardBottom>
          <CardNumber>
            <Span>{cardNumber}</Span>
          </CardNumber>
          <CardInfo>
            <CardParagraph width="120">{cardOwnerName || 'NAME'}</CardParagraph>
            <CardParagraph>{cardDate || 'MM / YY'}</CardParagraph>
          </CardInfo>
        </CardBottom>
      </CardBox>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <GridContainer>
          {cardCompanyList.map(({ color, name }, index) => (
            <CardCompany
              color={color}
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
