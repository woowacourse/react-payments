import React from 'react';
import { CardRegisterInfo } from '../../../types/card.type';
import * as Styled from './Card.styles';

export type CardProps =
  | { addButton: boolean; onClick?: () => void }
  | CardRegisterInfo;

export default function Card(props: CardProps) {
  return 'addButton' in props ? (
    <AddButton onClick={props.onClick} />
  ) : (
    <CardContent {...props} />
  );
}

function AddButton({ onClick }: { onClick?: () => void }) {
  return <Styled.CardRegisterButton onClick={onClick} />;
}

function CardContent({
  cardNumber,
  expirationDate,
  holderName,
}: CardRegisterInfo) {
  return (
    <Styled.Card>
      <Styled.CardMagnet />
      <Styled.CardNumberContainer>
        <Styled.CardNumber index={0}>{cardNumber.first}</Styled.CardNumber>
        <Styled.CardNumber index={1}>{cardNumber.second}</Styled.CardNumber>
        <Styled.CardNumber index={2}>
          {'●'.repeat(cardNumber.third.length)}
        </Styled.CardNumber>
        <Styled.CardNumber index={3}>
          {'●'.repeat(cardNumber.fourth.length)}
        </Styled.CardNumber>
      </Styled.CardNumberContainer>
      <Styled.CardHolderName>{holderName}</Styled.CardHolderName>
      <Styled.ExpirationDateContainer>
        <Styled.ExpirationDateText index={0}>
          {expirationDate.month}
        </Styled.ExpirationDateText>
        {(expirationDate.month || expirationDate.year) && (
          <Styled.ExpirationDateDivider />
        )}
        <Styled.ExpirationDateText index={1}>
          {expirationDate.year}
        </Styled.ExpirationDateText>
      </Styled.ExpirationDateContainer>
    </Styled.Card>
  );
}
