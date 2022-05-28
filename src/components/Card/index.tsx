import React from 'react';
import { CARD_TYPE } from '../../constant';
import { TCard } from '../../types';
import * as Styled from './index.styled';

interface Props {
  name: string;
  ownerName: string;
  expiredMonth: string;
  expiredYear: string;
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  cardType: TCard;
  onClick: () => void;
}

const Card = ({
  onClick,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  expiredMonth,
  expiredYear,
  cardType,
  ownerName,
}: Props) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.EmptyCard color={CARD_TYPE[cardType]?.color ?? 'white'}>
        <Styled.CardTop>
          <Styled.CardName>{cardType ? cardType : '카드이름'}</Styled.CardName>
        </Styled.CardTop>
        <Styled.CardMiddle>
          <Styled.CardChip />
          <Styled.CardNumbers>
            {firstCardNumber && <span>{firstCardNumber}</span>}
            {secondCardNumber && <span>{secondCardNumber}</span>}
            {thirdCardNumber && (
              <span>{'•'.repeat(thirdCardNumber.length)}</span>
            )}
            {fourthCardNumber && (
              <span>{'•'.repeat(fourthCardNumber.length)}</span>
            )}
          </Styled.CardNumbers>
        </Styled.CardMiddle>
        <Styled.CardBottom>
          <Styled.CardBottomInfo>
            <Styled.CardOwnerContainer>
              {ownerName ? ownerName.toUpperCase() : 'NAME'}
            </Styled.CardOwnerContainer>
            <Styled.CardExpiredDateContainer>
              {expiredMonth ? expiredMonth : 'MM'}
              {` / ${expiredYear ? expiredYear : 'YY'}`}
            </Styled.CardExpiredDateContainer>
          </Styled.CardBottomInfo>
        </Styled.CardBottom>
      </Styled.EmptyCard>
    </Styled.Container>
  );
};

export default Card;
