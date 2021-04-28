import { formatNumber2Digits } from '../../../utils/format';
import Container from '../../common/Container';
import { CreditCardContainer } from './styles';
import { Card } from '../../../types';
import { CARD_NUMBER_SEPARATOR, MASK_CHARACTER } from '../../../constants/creditCard';
import { DEFAULT_VALUE } from '../../../constants/creditCard';

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
          {expDate.month ? formatNumber2Digits(Number(expDate.month)) : DEFAULT_VALUE.MONTH} /{' '}
          {expDate.year ? formatNumber2Digits(Number(expDate.year)) : DEFAULT_VALUE.YEAR}
        </p>
      </Container>
    </CreditCardContainer>
  );
};

export default CreditCard;
