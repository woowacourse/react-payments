import {
  UseCVCReturnType,
  UseCardNumberReturnType,
  UseCardPasswordReturnType,
  UseCardholderNameReturnType,
  UseExpiryDateReturnType,
  UseSelectReturnType,
} from '../../types/hooks';
import { CardType } from '../../types/card';

import useCardNumberFormStatus from './useCardNumberFormStatus';
import useCardCompanyFormStatus from './useCardCompanyFormStatus';
import useCardholderNameFormStatus from './useCardholderNameFormStatus';
import useExpiryDateFormStatus from './useExpiryDateFormStatus';
import useCVCFormStatus from './useCVCFormStatus';
import useCardPasswordFormStatus from './useCardPasswordFormStatus';

interface UseFormValidationProps {
  cardNumberInfo: UseCardNumberReturnType;
  cardCompanyInfo: UseSelectReturnType<CardType>;
  expiryDateInfo: { month: UseExpiryDateReturnType; year: UseExpiryDateReturnType };
  cardholderNameInfo: UseCardholderNameReturnType;
  cardCVCInfo: UseCVCReturnType;
  cardPasswordInfo: UseCardPasswordReturnType;
}

const useFormValidation = ({
  cardNumberInfo,
  cardCompanyInfo,
  expiryDateInfo,
  cardholderNameInfo,
  cardCVCInfo,
  cardPasswordInfo,
}: UseFormValidationProps) => {
  const cardNumber = useCardNumberFormStatus(cardNumberInfo);
  const cardCompany = useCardCompanyFormStatus(cardCompanyInfo);
  const expiryDate = useExpiryDateFormStatus(expiryDateInfo);
  const cardholderName = useCardholderNameFormStatus(cardholderNameInfo);
  const cvc = useCVCFormStatus(cardCVCInfo);
  const password = useCardPasswordFormStatus(cardPasswordInfo);

  const validationStatus = {
    cardNumber,
    cardCompany,
    expiryDate,
    cardholderName,
    cvc,
    password,
  };

  const isCardFormValid =
    cardNumber.isValid &&
    cardCompany.isValid &&
    expiryDate.isValid &&
    cardholderName.isValid &&
    cvc.isValid &&
    password.isValid;

  return { validationStatus, isCardFormValid };
};

export default useFormValidation;
