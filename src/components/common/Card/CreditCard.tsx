import React from 'react';
import { COMPANY_NAME, Card } from './types';
import { Styled as S } from './CreditCard.styles';

export type CreditCardProps = {
  card: Card;
};

export interface CardColorProps extends React.ComponentPropsWithoutRef<'span'> {
  backgroundColor: COMPANY_NAME;
}

export function CreditCard({ card }: CreditCardProps) {
  return (
    <S.Wrapper backgroundColor={card.bank}>
      <S.Bank>{card.bank}</S.Bank>
      <S.Chip />
      <S.CardNumbers>
        <span>{card.numbers[0]}</span>
        <span>{card.numbers[1]}</span>
        <span>{'•'.repeat(card.numbers[2].length)}</span>
        <span>{'•'.repeat(card.numbers[3].length)}</span>
      </S.CardNumbers>
      <S.Container>
        <S.Name>{card.ownerName.length ? card.ownerName : 'NAME'}</S.Name>
        <S.ExpirationDate>
          <S.Month>{card.expirationDate.month.length ? card.expirationDate.month : 'MM'}</S.Month>
          <S.DateSeparator>
            {card.expirationDate.month.length === 2 ||
            card.expirationDate.year.length > 0 ||
            (card.expirationDate.month.length === 0 && card.expirationDate.year.length === 0)
              ? '/'
              : null}
          </S.DateSeparator>
          <S.Year>{card.expirationDate.year.length ? card.expirationDate.year : 'YY'}</S.Year>
        </S.ExpirationDate>
      </S.Container>
    </S.Wrapper>
  );
}
