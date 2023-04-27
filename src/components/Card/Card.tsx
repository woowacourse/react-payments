import { CardInfo } from '../../types/state';

import * as styled from './Card.styled';

export interface CardProps {
  cardInfo: CardInfo;
  theme: string | null;
}

const Card = ({ cardInfo, theme }: CardProps) => {
  return (
    <styled.Card theme={theme}>
      <styled.CardName>{cardInfo.cardCompany.name}</styled.CardName>
      <styled.Rectangle />
      <styled.CardInformationContainer>
        <styled.CardNumber theme={theme}>
          <input disabled defaultValue={cardInfo.cardNumbers.firstCardNumber} />
          <input disabled defaultValue={cardInfo.cardNumbers.secondCardNumber} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.thirdCardNumber} />
          <input disabled type="password" defaultValue={cardInfo.cardNumbers.fourthCardNumber} />
        </styled.CardNumber>
        <styled.CardNameAndExpirationDateContainer>
          <styled.OwnerName>{cardInfo.ownerName ?? 'NAME'}</styled.OwnerName>
          <styled.ExpirationDate>{`
					${cardInfo.expirationDate.month ?? 'MM'}/${cardInfo.expirationDate.year ?? 'YY'}
					`}</styled.ExpirationDate>
        </styled.CardNameAndExpirationDateContainer>
      </styled.CardInformationContainer>
    </styled.Card>
  );
};

export default Card;
