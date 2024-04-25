import { useEffect, useState } from 'react';
import {
  isValidCVCForm,
  isValidCardCompanyForm,
  isValidCardNumberForm,
  isValidCardholderNameForm,
  isValidExpiryDateForm,
  isValidPasswordForm,
} from '../../validator/validateForm';
import {
  UseCVCReturnType,
  UseCardNumberReturnType,
  UseCardPasswordReturnType,
  UseCardholderNameReturnType,
  UseExpiryDateReturnType,
  UseSelectReturnType,
} from '../../types/hooks';
import { CARD_TYPE } from '../../types/card';

interface UseFormValidationProps {
  cardNumberInfo: UseCardNumberReturnType;
  cardCompanyInfo: UseSelectReturnType<CARD_TYPE>;
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
  const isCardNumberValid = isValidCardNumberForm(cardNumberInfo);
  const isCardCompanyValid = isValidCardCompanyForm(cardCompanyInfo);
  const isExpiryDateValid = isValidExpiryDateForm(expiryDateInfo);
  const isCardholderNameValid = isValidCardholderNameForm(cardholderNameInfo);
  const isCardCVCValid = isValidCVCForm(cardCVCInfo);
  const isPasswordValid = isValidPasswordForm(cardPasswordInfo);

  const [validationStatus, setValidationStatus] = useState({
    cardNumberForm: { isValid: isCardNumberValid, isOpen: false },
    cardCompanyForm: { isValid: isCardCompanyValid, isOpen: false },
    expiryDateForm: { isValid: isExpiryDateValid, isOpen: false },
    cardholderNameForm: { isValid: isCardholderNameValid, isOpen: false },
    cvcForm: { isValid: isCardCVCValid, isOpen: false },
    passwordForm: { isValid: isPasswordValid, isOpen: false },
  });

  const { cardNumberForm, cardCompanyForm, expiryDateForm, cardholderNameForm, cvcForm, passwordForm } =
    validationStatus;

  const isCardFormValid =
    cardNumberForm.isValid &&
    cardCompanyForm.isValid &&
    expiryDateForm.isValid &&
    cardholderNameForm.isValid &&
    cvcForm.isValid &&
    passwordForm.isValid;

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      cardNumberForm: { ...prev.cardNumberForm, isValid: isCardNumberValid },
    }));

    if (isCardNumberValid) {
      setValidationStatus(prev => ({
        ...prev,
        cardNumberForm: { ...prev.cardNumberForm, isOpen: true },
      }));
    }
  }, [isCardNumberValid]);

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      cardCompanyForm: { ...prev.cardCompanyForm, isValid: isCardCompanyValid },
    }));

    if (isCardCompanyValid) {
      setValidationStatus(prev => ({
        ...prev,
        cardCompanyForm: { ...prev.cardCompanyForm, isOpen: true },
      }));
    }
  }, [isCardCompanyValid]);

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      expiryDateForm: { ...prev.expiryDateForm, isValid: isExpiryDateValid },
    }));

    if (isExpiryDateValid) {
      setValidationStatus(prev => ({
        ...prev,
        expiryDateForm: { ...prev.expiryDateForm, isOpen: true },
      }));
    }
  }, [isExpiryDateValid]);

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      cardholderNameForm: { ...prev.cardholderNameForm, isValid: isCardholderNameValid },
    }));

    if (isCardholderNameValid) {
      setValidationStatus(prev => ({
        ...prev,
        cardholderNameForm: { ...prev.cardholderNameForm, isOpen: true },
      }));
    }
  }, [isCardholderNameValid]);

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      cvcForm: { ...prev.cvcForm, isValid: isCardCVCValid },
    }));

    if (isCardCVCValid) {
      setValidationStatus(prev => ({
        ...prev,
        cvcForm: { ...prev.cvcForm, isOpen: true },
      }));
    }
  }, [isCardCVCValid]);

  useEffect(() => {
    setValidationStatus(prev => ({
      ...prev,
      passwordForm: { ...prev.passwordForm, isValid: isPasswordValid },
    }));

    if (isPasswordValid) {
      setValidationStatus(prev => ({
        ...prev,
        passwordForm: { ...prev.passwordForm, isOpen: true },
      }));
    }
  }, [isPasswordValid]);

  return { validationStatus, isCardFormValid };
};

export default useFormValidation;
