import Container from '../../shared/Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../../types';
import { CARD_NUMBER_SEPARATOR, MASK_CHARACTER } from '../../../constants/creditCard';
import { DEFAULT_VALUE } from '../../../constants/creditCard';
import { formatNumberNDigits } from '../../../utils/format';

interface Props extends Omit<Card, 'id' | 'CVC' | 'password'> {
  className?: string;
  size?: 'lg' | 'md';
}

const CreditCard = ({ className, size, cardBrand, ownerName, cardNumber, expDate }: Props) => {
  const splitedCardNumber = cardNumber.split(CARD_NUMBER_SEPARATOR);
  const { name, color } = cardBrand;

  return (
    <CreditCardContainer className={className} size={size} cardColor={color}>
      <p className="card-name">{name}</p>
      <div className="ic-chip" />
      <p className="card-number">
        <span>{splitedCardNumber[0]}</span>
        <span>{splitedCardNumber[1]}</span>
        <span>{MASK_CHARACTER.repeat(splitedCardNumber[2].length)}</span>
        <span>{MASK_CHARACTER.repeat(splitedCardNumber[3].length)}</span>
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
