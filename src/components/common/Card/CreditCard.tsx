import styled from 'styled-components';
import { Card, CardName } from './types';

export type CreditCardProps = {
  card: Partial<Card>;
};

export function CreditCard({ card }: CreditCardProps) {
  const { numbers, expirationDate, name, bankCode } = card;

  return (
    <Styled.Wrapper card={card}>
      <Styled.BankName>{bankCode && CardName[bankCode]}</Styled.BankName>
      <Styled.Chip />
      <Styled.CardNumbers>
        <span>{numbers?.[0]}</span>
        <span>{numbers?.[1]}</span>
        <Styled.Dots>{'•'.repeat(numbers?.[2].length ?? 0)}</Styled.Dots>
        <Styled.Dots>{'•'.repeat(numbers?.[3].length ?? 0)}</Styled.Dots>
      </Styled.CardNumbers>
      <Styled.Container>
        <Styled.Name>{name}</Styled.Name>
        <Styled.ExpirationDate>
          <Styled.Month>{expirationDate?.month}</Styled.Month>
          <Styled.DateSeparator>/</Styled.DateSeparator>
          <Styled.Year>{expirationDate?.year}</Styled.Year>
        </Styled.ExpirationDate>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div<CreditCardProps>`
    position: relative;
    width: 213px;
    height: 133px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background: ${({ card, theme: { colors } }) =>
      card.bankCode ? colors.card.background[card.bankCode] : 'white'};
    color: ${({ card, theme: { colors } }) =>
      card.bankCode ? colors.card.font[card.bankCode] : 'black'};
  `,

  BankName: styled.span`
    position: absolute;
    left: 13px;
    top: 11px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
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

  Dots: styled.span`
    letter-spacing: -5.5px;
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
  Name: styled.span`
    font-size: 12px;
  `,
  ExpirationDate: styled.div`
    font-size: 12px;
    width: 36px;
    height: 10px;
    display: flex;
  `,

  Month: styled.span`
    width: 14px;
  `,

  Year: styled.span`
    width: 14px;
  `,

  DateSeparator: styled.span`
    width: 6px;
    text-align: center;
  `,
};
