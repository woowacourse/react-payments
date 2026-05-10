import {useNavigate} from 'react-router-dom';
import {useCardNumbers} from './useCardNumbers';
import {useCompanySelect} from './useCompanySelect';
import {useExpiryDate} from './useExpiryDate';
import {useCvcNumber} from './useCvcNumber';
import {useCardPassword} from './useCardPassword';
import {CARD_COMPANIES} from '@/domain/card/cardCompany';
import type {CardRegisterInputProps, ExpiryInputProps} from '../types/cardRegisterInputProps';

const EXPIRY_PLACEHOLDERS = ['MM', 'YY'] as const;

const generateNumberPlaceholder = (length: number) => Array.from({length}, (_, i) => (i + 1) % 10).join('');

export function useCardRegisterForm() {
  const numberField = useCardNumbers();
  const companyField = useCompanySelect();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();
  const passwordField = useCardPassword();
  const navigate = useNavigate();

  const isBrandVisible = numberField.isComplete;
  const isExpiryVisible = isBrandVisible && companyField.isComplete;
  const isCvcVisible = isExpiryVisible && expiryField.isComplete;
  const isPasswordVisible = isCvcVisible && cvcField.isComplete;

  const visibleFields = {
    brand: isBrandVisible,
    expiry: isExpiryVisible,
    cvc: isCvcVisible,
    password: isPasswordVisible,
  };

  const isFormComplete =
    numberField.isComplete &&
    companyField.isComplete &&
    expiryField.isComplete &&
    cvcField.isComplete &&
    passwordField.isComplete;

  const getNumberInputProps = (): CardRegisterInputProps[] =>
    numberField.format.map((maxDigits, index) => ({
      type: 'text',
      value: numberField.cardNumbers[index] ?? '',
      maxLength: maxDigits,
      placeholder: generateNumberPlaceholder(maxDigits),
      onChange: (event) => numberField.handleChange(index, event.currentTarget.value),
      onBlur: (event) => numberField.handleBlur(index, event.currentTarget.value),
    }));

  const createExpiryInputProps = (index: 0 | 1): CardRegisterInputProps => ({
    type: 'text',
    value: expiryField.expiryDate[index],
    maxLength: 2,
    placeholder: EXPIRY_PLACEHOLDERS[index],
    onChange: (event) => expiryField.handleChange(index, event.currentTarget.value),
    onBlur: (event) => expiryField.handleBlur(index, event.currentTarget.value),
  });

  const getExpiryInputProps = (): ExpiryInputProps => ({
    month: createExpiryInputProps(0),
    year: createExpiryInputProps(1),
  });

  const getCvcInputProps = (): CardRegisterInputProps => ({
    type: 'text',
    value: cvcField.cvcNumber,
    maxLength: 3,
    placeholder: '123',
    onChange: (event) => cvcField.handleChange(event.currentTarget.value),
    onBlur: (event) => cvcField.handleBlur(event.currentTarget.value),
  });

  const getPasswordInputProps = (): CardRegisterInputProps => ({
    type: 'password',
    value: passwordField.password,
    maxLength: 2,
    placeholder: '',
    onChange: (event) => passwordField.handleChange(event.currentTarget.value),
    onBlur: (event) => passwordField.handleBlur(event.currentTarget.value),
  });

  const handleSubmit = () => {
    navigate('/complete', {
      state: {
        cardPrefix: numberField.cardNumbers[0],
        companyName: companyField.selectedCompany ? CARD_COMPANIES[companyField.selectedCompany].name : '',
      },
    });
  };

  return {
    cardPreview: {
      cardNumbers: numberField.cardNumbers,
      brand: numberField.brand,
      expiryDate: expiryField.expiryDate,
      selectedCompany: companyField.selectedCompany,
    },
    fieldProps: {
      cardNumbers: {
        inputProps: getNumberInputProps(),
        errorMessage: numberField.errMsg,
        errorIndex: numberField.firstErrIdx,
      },
      cardBrand: {
        selectedCompany: companyField.selectedCompany,
        onChange: companyField.handleChange,
      },
      cardExpiryDate: {
        inputProps: getExpiryInputProps(),
        errorMessage: expiryField.errMsg,
        errorIndex: expiryField.firstErrIdx,
      },
      cardCvc: {
        inputProps: getCvcInputProps(),
        errorMessage: cvcField.errMsg,
      },
      cardPassword: {
        inputProps: getPasswordInputProps(),
        errorMessage: passwordField.errMsg,
      },
    },
    visibleFields,
    isFormComplete,
    handleSubmit,
  };
}
