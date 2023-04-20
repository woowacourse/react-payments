import { CardInfo } from '../../App';
import * as styled from './Card.styled';

const Card = ({ cardInfo, bgColor }: { cardInfo: CardInfo; bgColor: string }) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInformationContainer>
        <styled.CardNumber>
          <input disabled defaultValue={cardInfo.numbers.first} />
          <input disabled defaultValue={cardInfo.numbers.second} />
          <input disabled type="password" defaultValue={cardInfo.numbers.third} />
          <input disabled type="password" defaultValue={cardInfo.numbers.fourth} />
        </styled.CardNumber>
        <styled.CardNameAndExpirationDateContainer>
          <styled.CardName>{cardInfo.ownerName ? cardInfo.ownerName : 'NAME'}</styled.CardName>
          <styled.ExpirationDate>{`${
            cardInfo.expirationDate.month ? cardInfo.expirationDate.month : 'MM'
          }/${
            cardInfo.expirationDate.year ? cardInfo.expirationDate.year : 'YY'
          }`}</styled.ExpirationDate>
        </styled.CardNameAndExpirationDateContainer>
      </styled.CardInformationContainer>{' '}
    </styled.Card>
  );
};

export default Card;
