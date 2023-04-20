import { CardInfo } from '../../App';
import * as styled from './Card.styled';

const Card = ({ cardInfo, bgColor }: { cardInfo: CardInfo; bgColor: string }) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInformationContainer>
        <styled.CardNumber>
          <input disabled defaultValue={cardInfo.numbers[0]} />
          <input disabled defaultValue={cardInfo.numbers[1]} />
          <input disabled type="password" defaultValue={cardInfo.numbers[2]} />
          <input disabled type="password" defaultValue={cardInfo.numbers[3]} />
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
