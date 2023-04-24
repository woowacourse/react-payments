import { CardInfo } from '../../types/state';
import * as styled from './Card.styled';

const Card = ({ cardInfo, bgColor }: { cardInfo: CardInfo; bgColor: string }) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInformationContainer>
        <styled.CardNumber>
          <input disabled defaultValue={cardInfo.cardNumbers.first} />
          <input disabled defaultValue={cardInfo.cardNumbers.second} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.third} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.fourth} />
        </styled.CardNumber>
        <styled.CardNameAndExpirationDateContainer>
          <styled.CardName>{cardInfo.ownerName ?? 'NAME'}</styled.CardName>
          <styled.ExpirationDate>{`
					${cardInfo.expirationDate.month ?? 'MM'}/${cardInfo.expirationDate.year ?? 'YY'}
					`}</styled.ExpirationDate>
        </styled.CardNameAndExpirationDateContainer>
      </styled.CardInformationContainer>{' '}
    </styled.Card>
  );
};

export default Card;
