import React, { useState } from 'react';
import useCardState from '../hooks/useCardState';

import CardCompany from './common/CardCompany';
import Modal from './common/Modal';

import * as CommonStyle from './common/styles';
import * as CardShapeStyle from './common/styles/CardShape.style';

const S = { ...CommonStyle, ...CardShapeStyle };

function CardShape() {
  const { cardNumber, cardOwnerName, dueDate, dimensions, cardCompanyList } = useCardState();

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
            <S.CardParagraph>{dueDate || 'MM / YY'}</S.CardParagraph>
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
