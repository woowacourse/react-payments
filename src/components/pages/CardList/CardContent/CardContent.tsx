import { ReactNode } from 'react';
import { CardRegisterInfo } from '../../../../types/card.type';
import * as Styled from './CardContent.styles';

export interface CardContentProps extends CardRegisterInfo {
  onClick?: (newContent?: ReactNode) => void;
}

export default function CardContent({ cardNumber, expirationDate, holderName, bankName, onClick }: CardContentProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Card onClick={onClick ? handleClick : undefined} bankName={bankName}>
      <p>{bankName}</p>
      <Styled.CardMagnet />
      <Styled.CardNumberContainer>
        <Styled.CardNumber index={0}>{cardNumber.first}</Styled.CardNumber>
        <Styled.CardNumber index={1}>{cardNumber.second}</Styled.CardNumber>
        <Styled.CardNumber index={2}>{'●'.repeat(cardNumber.third.length)}</Styled.CardNumber>
        <Styled.CardNumber index={3}>{'●'.repeat(cardNumber.fourth.length)}</Styled.CardNumber>
      </Styled.CardNumberContainer>
      <Styled.CardHolderName>{holderName}</Styled.CardHolderName>
      <Styled.ExpirationDateContainer>
        <Styled.ExpirationDateText index={0}>{expirationDate.month}</Styled.ExpirationDateText>
        {(expirationDate.month || expirationDate.year) && <Styled.ExpirationDateDivider bankName={bankName} />}
        <Styled.ExpirationDateText index={1}>{expirationDate.year}</Styled.ExpirationDateText>
      </Styled.ExpirationDateContainer>
    </Styled.Card>
  );
}
