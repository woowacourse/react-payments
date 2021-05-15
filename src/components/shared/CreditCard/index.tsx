import Container from '../../shared/Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../../types';
import { CARD_NUMBER_SEPARATOR, MASK_CHARACTER } from '../../../constants/creditCard';
import { DEFAULT_VALUE } from '../../../constants/creditCard';
import { formatNumberNDigits } from '../../../utils/format';
import { VFC } from 'react';

interface Props extends Pick<Card, 'cardBrand' | 'ownerName' | 'cardNumber' | 'expDate'> {
  className?: string;
  size?: 'lg' | 'md';
}

const CreditCard: VFC<Props> = ({ className, size, cardBrand, ownerName, cardNumber, expDate }) => {
  const [firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber] = cardNumber.split(
    CARD_NUMBER_SEPARATOR
  );
  const { name, color } = cardBrand;

  return (
    <CreditCardContainer className={className} size={size} cardColor={color}>
      <p className="card-name">{name}</p>
      <div className="ic-chip" />
      <p className="card-number">
        <span>{firstCardNumber}</span>
        <span>{secondCardNumber}</span>
        <span>{MASK_CHARACTER.repeat(thirdCardNumber?.length)}</span>
        <span>{MASK_CHARACTER.repeat(fourthCardNumber?.length)}</span>
      </p>
      <Container flex justifyContent="space-between" className="info-wrapper">
        <p className="owner-name">{ownerName || DEFAULT_VALUE.OWNER_NAME}</p>
        <p>
          {expDate.month ? formatNumberNDigits(Number(expDate.month), 2) : DEFAULT_VALUE.MONTH} /{' '}
          {expDate.year ? formatNumberNDigits(Number(expDate.year), 2) : DEFAULT_VALUE.YEAR}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
