import { CARD_NUMBER_SEPARATOR, DEFAULT_VALUE, MASK_CHARACTER } from '../../../constants/creditCard';
import { Card } from '../../../types';
import { formatNumber2Digits } from '../../../utils/format';
import Container from '../Container';
import {
  CreditCardContainer,
  CardNameContainer,
  IcChip,
  CardNumberContainer,
  InfoContainer,
  OwnerNameContainer,
} from './styles';

interface Props extends Omit<Card, 'id' | 'CVC' | 'password'> {
  className?: string;
  size?: 'lg' | 'md';
}

const CreditCard = ({ className, size, cardBrand, ownerName, cardNumber, expDate }: Props) => {
  const splitedCardNumber = cardNumber.split(CARD_NUMBER_SEPARATOR);
  const { name, color } = cardBrand;

  return (
    <CreditCardContainer className={className} size={size} cardColor={color}>
      <CardNameContainer>{name}</CardNameContainer>
      <IcChip />
      <CardNumberContainer>
        <span>{splitedCardNumber[0]}</span>
        <span>{splitedCardNumber[1]}</span>
        <span>{MASK_CHARACTER.repeat(splitedCardNumber[2].length)}</span>
        <span>{MASK_CHARACTER.repeat(splitedCardNumber[3].length)}</span>
      </CardNumberContainer>
      <InfoContainer flex justifyContent="space-between">
        <OwnerNameContainer>{ownerName || DEFAULT_VALUE.OWNER_NAME}</OwnerNameContainer>
        <p>
          {expDate.month ? formatNumber2Digits(Number(expDate.month)) : DEFAULT_VALUE.MONTH} /{' '}
          {expDate.year ? formatNumber2Digits(Number(expDate.year)) : DEFAULT_VALUE.YEAR}
        </p>
      </InfoContainer>
    </CreditCardContainer>
  );
};

export default CreditCard;
