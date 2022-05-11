import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDispatch from '../hooks/useDispatch';
import { CARD_ADD_BOX_BG_COLOR } from '../theme';

import CardCompany from './common/CardCompany';
import Modal from './common/Modal';

import * as CommonStyle from './common/styles';
import * as CardShapeStyle from './common/styles/CardShape.style';

const S = { ...CommonStyle, ...CardShapeStyle };

function CardShape({ type = 'EMPTY_CARD', company, cardNumber, cardOwnerName, dueDate, dimensions, cardCompanyList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isShown, setIsShown] = useState(false);
  const [hexColor, setHexColor] = useState('');
  const [cardCompanyName, setCardCompanyName] = useState('');

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  const handleClickAddBox = () => {
    navigate(`/card-add`);
  };

  const handleClickCompany = ({ id, color, name }) => {
    setHexColor(color);
    setCardCompanyName(name);
    dispatch({ type: 'CARD_COMPANY', cardCompany: { id, color, name }, isPickCompany: true });
    setIsShown(!isShown);
  };

  if (type === 'EMPTY_CARD') {
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
            {cardCompanyList.map(({ id, color, name }, index) => (
              <CardCompany
                color={color}
                name={name}
                key={index}
                handleClick={() => handleClickCompany({ id, color, name })}
              />
            ))}
          </S.GridContainer>
        </Modal>
      </S.CardContainer>
    );
  }

  if (type === 'USER_CARD') {
    return (
      <S.CardContainer>
        <S.CardBox hexColor={company.color}>
          <S.CardHeader>
            <S.Span>{company.name}</S.Span>
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
      </S.CardContainer>
    );
  }

  if (type === 'ADD') {
    return (
      <S.CardContainer>
        <S.CardBox onClick={handleClickAddBox} hexColor={CARD_ADD_BOX_BG_COLOR}>
          <S.CardAddBox>+</S.CardAddBox>
        </S.CardBox>
      </S.CardContainer>
    );
  }
}

export default CardShape;
