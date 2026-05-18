import { CardIssuerType, CardNumbersType } from '../components/Form/PaymentForm';
import { CARD_BRAND, CARD_BRAND_RULE, CARD_ISSUER_CONFIG } from '../constants';

export const getCardIssuerBackgroundColor = (value: CardIssuerType | null): string => {
  return (
    Object.values(CARD_ISSUER_CONFIG).find((issuer) => issuer.name === value)?.color ?? '#333333'
  );
};

export const detectCardBrand = (cardNumbers: CardNumbersType) => {
  const numberString = cardNumbers.join('');

  return (
    CARD_BRAND_RULE.filter((brand) => brand.prefixPattern.test(numberString))[0]?.name ??
    CARD_BRAND['LOCAL']
  );
};

export const formatCardNumber = (number: string): string => {
  const first = number.slice(0, 4);
  const last = number.slice(-4);
  return `${first} **** **** ${last}`;
};
