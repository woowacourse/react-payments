import { checkValidMonth, checkValidYear } from '@/components/CardExpirationDate/utils';
import { CardCompanyType, CardExpirationDateType, CardNumberSequenceType } from '@/types';

export const checkAllNumber = (value: string) => {
  return /^[0-9]*$/.test(value);
};

export const isValidCardNumber = (cardNumber: Record<CardNumberSequenceType, string>) => {
  return Object.values(cardNumber).every((value) => value.length === 4);
};

export const isValidExpirationDate = (cardExpirationDate: Record<CardExpirationDateType, string>) => {
  const { month, year } = cardExpirationDate;
  return checkValidMonth(month) && checkValidYear(year);
};

export const isValidCVCNumber = (cardCVCNumber: string) => {
  return cardCVCNumber.length === 3;
};

export const isValidCardInfo = ({
  cardNumber,
  cardExpirationDate,
  cardCVCNumber,
  selectedCompany,
}: {
  cardNumber: Record<CardNumberSequenceType, string>;
  cardExpirationDate: Record<CardExpirationDateType, string>;
  cardCVCNumber: string;
  selectedCompany: CardCompanyType | '';
}) => {
  return (
    isValidCardNumber(cardNumber) &&
    isValidExpirationDate(cardExpirationDate) &&
    isValidCVCNumber(cardCVCNumber) &&
    selectedCompany !== ''
  );
};
