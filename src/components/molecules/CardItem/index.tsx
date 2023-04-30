import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useCardModalDispatch } from '../../../hooks/useContextHooks';
import { Card } from '../../../store/type';
import Message from '../../atomics/Message';
import { SBetweenStack } from '../../layout/flexbox';
import { color } from '../../stylesheet/theme';

type CardItemProps = {
  card: Omit<Card, 'id'>;
};

const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const cardModalDispatch = useCardModalDispatch();
  const location = useLocation();

  const handleModal = () => {
    if (location.pathname !== '/addCard') return;
    cardModalDispatch();
  };

  return (
    <StyledCardItemBox onClick={handleModal} cardType={card.cardName}>
      <StyledCardName fontWeight={500} fontSize="12px" lineHeight="14px" color="#fff">
        {card.cardName}
      </StyledCardName>
      <StyledCardItemGoldBox />
      <CardNumberWrapper>
        {Array(4)
          .fill(0)
          .map((_, idx) => {
            if (idx < 2) {
              return (
                <MessageBox
                  key={idx}
                  fontWeight={500}
                  fontSize="14px"
                  lineHeight="14px"
                  color="#fff"
                  letterSpacing="2.5px"
                >
                  {card.cardNumbers[idx]}
                </MessageBox>
              );
            } else {
              return (
                <MessageBox
                  key={idx}
                  fontWeight={500}
                  fontSize="14px"
                  lineHeight="14px"
                  color="#fff"
                  letterSpacing="2.5px"
                >
                  {Array(card.cardNumbers[idx].length)
                    .fill(0)
                    .map((_, idx) => (
                      <Dot key={idx} />
                    ))}
                </MessageBox>
              );
            }
          })}
      </CardNumberWrapper>
      <CardInfo>
        <Message fontWeight={500} fontSize="12px" lineHeight="14px" color="#fff">
          {card.cardOwner[0]}
        </Message>
        <Message fontWeight={500} fontSize="12px" lineHeight="14px" color="#fff">
          {card.cardExpirationDate[0]} / {card.cardExpirationDate[1]}
        </Message>
      </CardInfo>
    </StyledCardItemBox>
  );
};

const StyledCardItemBox = styled.div<{ cardType: string }>`
  width: 214px;
  height: 132px;
  background-color: ${(props) => color[props.cardType] || '#333'};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 12px;
`;

const StyledCardName = styled(Message)``;

const StyledCardItemGoldBox = styled.div`
  margin-top: 20px;

  width: 40px;
  height: 24px;
  background-color: #cbba64;
  border-radius: 4px;
`;

const CardNumberWrapper = styled.ul`
  display: flex;
  margin-top: 12px;
  margin-left: 4px;
`;

const MessageBox = styled(Message)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;

  width: 36px;

  & + & {
    margin-left: 12px;
  }
`;

const CardInfo = styled.div`
  ${SBetweenStack}

  margin-top: 4px;
  margin-left: 4px;
`;

const Dot = styled.span`
  display: inline-block;
  background-color: #fff;
  width: 4px;
  height: 4px;
  border-radius: 50%;

  & + & {
    margin-left: 4px;
  }
`;

export default CardItem;
