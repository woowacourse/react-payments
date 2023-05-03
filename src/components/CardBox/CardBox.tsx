import { Card } from '../../types/state';

import * as styled from './CardBox.styled';

export interface CardBoxProps {
  card: Card;
  backgroundColor: string | null;
}

const CardBox = ({ card, backgroundColor }: CardBoxProps) => {
  return (
    <styled.CardBox backgroundColor={backgroundColor}>
      <styled.EmptyCardBox company={card.company.name}>
        <p>카드사 등록하기</p>
      </styled.EmptyCardBox>
      <styled.CardNameParagraph>{card.company.name}</styled.CardNameParagraph>
      <styled.RectangleBox backgroundColor={backgroundColor} />
      <styled.CardInfoBox>
        <styled.SerialNumberBox backgroundColor={backgroundColor}>
          <input disabled defaultValue={card.serialNumbers.firstSerialNumber} />
          <input
            disabled
            defaultValue={card.serialNumbers.secondSerialNumber}
          />
          <input
            disabled
            type="password"
            defaultValue={card.serialNumbers.thirdSerialNumber}
          />
          <input
            disabled
            type="password"
            defaultValue={card.serialNumbers.fourthSerialNumber}
          />
        </styled.SerialNumberBox>
        <styled.OwnerNameAndExpirationDateBox>
          <styled.OwnerNameParagraph>
            {card.ownerName ?? 'NAME'}
          </styled.OwnerNameParagraph>
          <styled.ExpirationDateParagraph>{`
					${card.expirationDate.month ?? 'MM'}/${card.expirationDate.year ?? 'YY'}
					`}</styled.ExpirationDateParagraph>
        </styled.OwnerNameAndExpirationDateBox>
      </styled.CardInfoBox>
    </styled.CardBox>
  );
};

export default CardBox;
