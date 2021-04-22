import { FC } from 'react';
import { formatNumber2Digits } from '../../utils/format';
import { CardButton } from '../AddCardButton/styles';
import Container from '../common/Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../types';

const CreditCard: FC<Omit<Card, 'id' | 'cvc'>> = ({ cardName, cardColor, ownerName, cardNumber, expirationDate }) => {
  const { first, second, third, fourth } = cardNumber;

  return (
    <CreditCardContainer cardColor={cardColor}>
      <p className="card-name">{cardName}</p>
      <div className="ic-chip" />
      <p className="card-number">
        <span>{first}</span>
        <span>{second}</span>
        <span>{'·'.repeat(third.toString().length)}</span>
        <span>{'·'.repeat(fourth.toString().length)}</span>
      </p>
      <Container flex spaceBetween className="info-wrapper">
        <p>{ownerName}</p>
        <p>
          {formatNumber2Digits(expirationDate.month)} / {formatNumber2Digits(expirationDate.year)}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
