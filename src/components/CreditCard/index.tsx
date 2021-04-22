import { FC } from 'react';
import { formatNumber2Digits } from '../../utils/format';
import Container from '../common/Container';
import { CreditCardContainer } from './styles';

interface Props {
  cardName: string;
  cardColor: string;
  ownerName: string;
  cardNumber: CardNumber;
  expirationDate: Date;
  cvc: number;
}

const CreditCard: FC<Props> = ({ cardName, cardColor, ownerName, cardNumber, expirationDate, cvc }) => {
  const { first, second, third, fourth } = cardNumber;
  const expirationYear = expirationDate.getFullYear() % 100;
  const expirationMonth = expirationDate.getMonth();

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
          {formatNumber2Digits(expirationYear)} / {formatNumber2Digits(expirationMonth)}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
