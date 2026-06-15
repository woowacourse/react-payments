import { CardBrand } from '../components/Card/CardPreview/CardPreview';
import {
  CardIssuerType,
  CardNumbersType,
  ExpirationDateType,
} from '../components/Form/PaymentForm';
import { CARD_BRAND, VALIDATION_RULE } from '../constants';
import { detectCardBrand } from './cards';
import { expirationDateValidator } from './validate';

export const getCardNumbersMaxLength = (
  cardBrand: CardBrand,
  cardNumbersLength: number,
  index: number
) => {
  const lastField = index === cardNumbersLength - 1;

  if (lastField && cardBrand === CARD_BRAND['DINERS']) return 2;
  else if (lastField && cardBrand === CARD_BRAND['AMEX']) return 3;

  return 4;
};

export const isFieldComplete = (value: string, maxLength: number) => value.length === maxLength;

export const isCardRegistrationComplete = ({
  cardNumbers,
  expirationDate,
  cvc,
  password,
  cardIssuer,
}: {
  cardNumbers: CardNumbersType;
  expirationDate: ExpirationDateType;
  cvc: string;
  password: string;
  cardIssuer: CardIssuerType | null;
}) => {
  const brand = detectCardBrand(cardNumbers);

  const cardNumbersComplete = cardNumbers.every((v, i) =>
    isFieldComplete(v, getCardNumbersMaxLength(brand, cardNumbers.length, i))
  );
  const isExpirationComplete = Object.values(expirationDate).every(
    (v, i) =>
      isFieldComplete(v, VALIDATION_RULE.EXPIRATION_DATE_LENGTH) &&
      !expirationDateValidator(v, i).error
  );
  const cvcComplete = isFieldComplete(cvc, VALIDATION_RULE.CVC_LENGTH);
  const passwordComplete = isFieldComplete(password, VALIDATION_RULE.PASSWORD_LENGTH);

  return cardNumbersComplete && !!cardIssuer && isExpirationComplete && cvcComplete && passwordComplete;
};
