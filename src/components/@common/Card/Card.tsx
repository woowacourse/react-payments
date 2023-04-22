import React, { MouseEvent } from 'react';
import { CardRegisterInfo } from '../../../types/card.type';
import * as Styled from './Card.styles';

interface AddButtonProps {
  type: 'button';
  onClick(e: MouseEvent): void;
}

interface CardContentProps extends CardRegisterInfo {
  type: 'card';
}

export type CardProps = CardContentProps | AddButtonProps;

export default function Card(props: CardProps) {
  const { type } = props;

  return type === 'button' ? <AddButton {...props} /> : <CardContent {...props} />;
}

function AddButton({ onClick }: AddButtonProps) {
  return <Styled.CardRegisterButton onClick={onClick} />;
}

function CardContent({ cardNumber, expirationDate, holderName }: CardRegisterInfo) {
  return (
    <Styled.Card>
      <Styled.CardContainer>
        <Styled.CardMagnet />
        <Styled.CardNumberContainer>
          {Object.values(cardNumber).map((number, i) =>
            i < 2 ? (
              <Styled.CardNumber key={i} defaultValue={number} disabled />
            ) : (
              <Styled.CardNumber key={i} type="password" defaultValue={number} disabled />
            )
          )}
        </Styled.CardNumberContainer>
        <Styled.CardHolderName>{holderName}</Styled.CardHolderName>
        <Styled.ExpirationDateContainer>
          <Styled.ExpirationDateText>{expirationDate.month}</Styled.ExpirationDateText>
          <Styled.ExpirationDateDivider>/</Styled.ExpirationDateDivider>
          <Styled.ExpirationDateText>{expirationDate.year}</Styled.ExpirationDateText>
        </Styled.ExpirationDateContainer>
      </Styled.CardContainer>
    </Styled.Card>
  );
}
