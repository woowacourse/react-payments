import { checkValidMonth, checkValidYear } from '@/components/CardExpirationDate/utils';
import { CardCompanyType, DateType, SequenceType } from '@/types';

export const checkAllNumber = (value: string) => {
  return /^[0-9]*$/.test(value);
};

export const isValidCardNumber = (cardNumber: Record<SequenceType, string>) => {
  return Object.values(cardNumber).every((value) => value.length === 4);
};

export const isValidExpirationDate = (cardExpirationDate: Record<DateType, string>) => {
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
  cardNumber: Record<SequenceType, string>;
  cardExpirationDate: Record<DateType, string>;
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
