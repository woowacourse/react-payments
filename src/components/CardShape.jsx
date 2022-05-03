import React, { useState } from 'react';
import CardCompany from './common/CardCompany';
import Modal from './common/Modal';

import * as CommonStyle from './common/styles';
import * as CardShapeStyle from './common/styles/CardShape.style';

const S = { ...CommonStyle, ...CardShapeStyle };

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
    <S.CardContainer>
      <S.CardBox onClick={handleClickBox} hexColor={hexColor}>
        <S.CardHeader>
          <S.Span>{cardCompanyName}</S.Span>
        </S.CardHeader>
        <S.CardChip />
        <S.CardBottom>
          <S.CardNumber>
            <S.Span>{cardNumber}</S.Span>
          </S.CardNumber>
          <S.CardInfo>
            <S.CardParagraph width={'120'}>{cardOwnerName || 'NAME'}</S.CardParagraph>
            <S.CardParagraph>{cardDate || 'MM / YY'}</S.CardParagraph>
          </S.CardInfo>
        </S.CardBottom>
      </S.CardBox>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <S.GridContainer>
          {cardCompanyList.map(({ color, name }, index) => (
            <CardCompany
              color={color}
              name={name}
              key={index}
              handleClick={() => handleClickCompany({ color, name })}
            />
          ))}
        </S.GridContainer>
      </Modal>
    </S.CardContainer>
  );
}

export default CardShape;
