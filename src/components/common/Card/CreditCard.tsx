import React from 'react';
import { COMPANY_NAME, Card } from './types';
import styled from 'styled-components';
import { COMPANY_LIST, CARDS_INFO } from '../../../constants';

export type CreditCardProps = {
  card: Card;
};

interface CardColorProps extends React.ComponentPropsWithoutRef<'span'> {
  backgroundColor: COMPANY_NAME;
}

export function CreditCard({ card }: CreditCardProps) {
  return (
    <Styled.Wrapper backgroundColor={card.bank}>
      <Styled.Bank>{card.bank}</Styled.Bank>
      <Styled.Chip />
      <Styled.CardNumbers>
        <span>{card.numbers[0]}</span>
        <span>{card.numbers[1]}</span>
        <span>{'•'.repeat(card.numbers[2].length)}</span>
        <span>{'•'.repeat(card.numbers[3].length)}</span>
      </Styled.CardNumbers>
      <Styled.Container>
        <Styled.Name>{card.ownerName.length ? card.ownerName : 'NAME'}</Styled.Name>
        <Styled.ExpirationDate>
          <Styled.Month>
            {card.expirationDate.month.length ? card.expirationDate.month : 'MM'}
          </Styled.Month>
          <Styled.DateSeparator>
            {card.expirationDate.month.length === 2 ||
            card.expirationDate.year.length > 0 ||
            (card.expirationDate.month.length === 0 && card.expirationDate.year.length === 0)
              ? '/'
              : null}
          </Styled.DateSeparator>
          <Styled.Year>
            {card.expirationDate.year.length ? card.expirationDate.year : 'YY'}
          </Styled.Year>
        </Styled.ExpirationDate>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div<CardColorProps>`
    position: relative;
    width: 213px;
    height: 133px;
    background-color: ${({ backgroundColor }) =>
      CARDS_INFO[COMPANY_LIST.indexOf(backgroundColor)].color ?? 'black'};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: ${({ backgroundColor }) => (backgroundColor === '카카오뱅크' ? '#3A1D1D' : 'white')};
    z-index: 1;
    cursor: pointer;
  `,
  Chip: styled.div`
    position: absolute;
    width: 40px;
    height: 26px;
    left: 14px;
    top: 47px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumbers: styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 169px;
    height: 10px;
    left: 24px;
    top: 84px;
    span {
      width: 34px;
      font-size: 14px;
    }
  `,

  Container: styled.div`
    position: absolute;
    width: 174px;
    height: 10px;
    left: 19px;
    top: 107px;
    display: flex;
    justify-content: space-between;
  `,

  Bank: styled.span`
    position: absolute;
    top: 11px;
    left: 13px;
    font-size: 12px;
  `,

  Name: styled.span`
    width: 140px;
    height: 12px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  ExpirationDate: styled.div`
    font-size: 12px;
    width: 40px;
    height: 10px;
    display: flex;
  `,

  Month: styled.span`
    width: 20px;
    text-align: center;
  `,

  Year: styled.span`
    width: 20px;
    text-align: center;
  `,

  DateSeparator: styled.span`
    width: 6px;
    text-align: center;
  `,
};
