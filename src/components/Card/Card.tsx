import * as styled from './Card.styled';

import { BANKS } from '../../constants';

import { CardInfo } from '../../types/card';

interface CardProps {
  cardInfo: CardInfo;
}

const Card = ({ cardInfo }: CardProps) => {
  return (
    <styled.Card bgColor={BANKS[cardInfo.bank]?.bgColor} color={BANKS[cardInfo.bank]?.color}>
      <styled.Rectangle />
      <styled.CardInfos>
        <styled.BankName>{BANKS[cardInfo.bank]?.name}</styled.BankName>
        <styled.Bottom>
          <styled.CardNumbers>
            <div>{cardInfo.firstCardNumbers}</div>
            <div>{cardInfo.secondCardNumbers}</div>
            <styled.EllipseContainer>
              {Array.from({ length: cardInfo.thirdCardNumbers.length }).map((_, index) => (
                <styled.Ellipse key={index} color={BANKS[cardInfo.bank]?.color} />
              ))}
            </styled.EllipseContainer>
            <styled.EllipseContainer>
              {Array.from({ length: cardInfo.fourthCardNumbers.length }).map((_, index) => (
                <styled.Ellipse key={index} color={BANKS[cardInfo.bank]?.color} />
              ))}
            </styled.EllipseContainer>
          </styled.CardNumbers>
          <styled.ExtraInfos>
            <styled.CardOwnerName>
              {cardInfo.ownerName ? cardInfo.ownerName : 'NAME'}
            </styled.CardOwnerName>
            <styled.ExpirationDate>
              <styled.ExpirationMonth>
                <span>{cardInfo.expirationMonth ? cardInfo.expirationMonth : 'MM'}</span>
              </styled.ExpirationMonth>
              <span>/</span>
              <styled.ExpirationYear>
                <span>{cardInfo.expirationYear || 'YY'}</span>
              </styled.ExpirationYear>
            </styled.ExpirationDate>
          </styled.ExtraInfos>
        </styled.Bottom>
      </styled.CardInfos>
    </styled.Card>
  );
};

export default Card;
