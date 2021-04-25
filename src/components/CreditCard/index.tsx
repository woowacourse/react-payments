import { formatNumber2Digits } from '../../utils/format';
import Container from '../common/Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../types';

interface Props extends Omit<Card, 'id' | 'cvc' | 'password'> {
  className?: string;
  size?: 'lg' | 'md';
}

const CreditCard = ({ className, size, cardBrand, ownerName, cardNumber, expDate }: Props) => {
  const { first, second, third, fourth } = cardNumber;
  const { name, color } = cardBrand;

  return (
    <CreditCardContainer className={className} size={size} cardColor={color}>
      <p className="card-name">{name}</p>
      <div className="ic-chip" />
      <p className="card-number">
        <span>{first}</span>
        <span>{second}</span>
        <span>{'·'.repeat(third.length)}</span>
        <span>{'·'.repeat(fourth.length)}</span>
      </p>
      <Container flex justifyContent="space-between" className="info-wrapper">
        <p className="owner-name">{ownerName || 'NAME'}</p>
        <p>
          {expDate.month ? formatNumber2Digits(Number(expDate.month)) : 'MM'} /{' '}
          {expDate.year ? formatNumber2Digits(Number(expDate.year)) : 'YY'}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
