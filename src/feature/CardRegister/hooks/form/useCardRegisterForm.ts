import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useCardNumbers} from './useCardNumbers';
import {useCompanySelect} from './useCompanySelect';
import {useExpiryDate} from './useExpiryDate';
import {useCvcNumber} from './useCvcNumber';
import {useCardPassword} from './useCardPassword';

import {CARD_COMPANIES} from '@/domain/card/cardCompany';
import type {CardRegisterCompleteState} from '@/feature/CardRegisterComplete/routeState.types';
import type {CardRegisterInputProps, ExpiryInputProps} from '../../components/inputs/shared.types';

const generateNumberPlaceholder = (length: number) => Array.from({length}, (_, i) => (i + 1) % 10).join('');
const SUBMIT_ERROR_MESSAGE = '카드 정보를 다시 확인해 주세요';

export function useCardRegisterForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');

  // 각 필드의 커스텀훅을 가져와서 사용
  const numberField = useCardNumbers();
  const companyField = useCompanySelect();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();
  const passwordField = useCardPassword();

  // step을 파생값으로 두어 간편하게 관리
  const isCompanyVisible = numberField.isComplete;
  const isExpiryVisible = isCompanyVisible && companyField.isComplete;
  const isCvcVisible = isExpiryVisible && expiryField.isComplete;
  const isPasswordVisible = isCvcVisible && cvcField.isComplete;

  const visibleFields = {
    company: isCompanyVisible,
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
    numberField.format.map((maxLength, index) => ({
      type: 'text',
      inputMode: 'numeric',
      value: numberField.cardNumbers[index] ?? '',
      maxLength: maxLength,
      placeholder: generateNumberPlaceholder(maxLength),
      onChange: (event) => numberField.handleChange(index, event.currentTarget.value),
      onBlur: (event) => numberField.handleBlur(index, event.currentTarget.value),
    }));

  const createExpiryInputProps = (index: 0 | 1): CardRegisterInputProps => ({
    type: 'text',
    inputMode: 'numeric',
    value: expiryField.expiryDate[index],
    maxLength: 2,
    placeholder: ['MM', 'YY'][index],
    onChange: (event) => expiryField.handleChange(index, event.currentTarget.value),
    onBlur: (event) => expiryField.handleBlur(index, event.currentTarget.value),
  });

  const getExpiryInputProps = (): ExpiryInputProps => ({
    month: createExpiryInputProps(0),
    year: createExpiryInputProps(1),
  });

  const getCvcInputProps = (): CardRegisterInputProps => ({
    type: 'text',
    inputMode: 'numeric',
    value: cvcField.cvcNumber,
    maxLength: 3,
    placeholder: '123',
    onChange: (event) => cvcField.handleChange(event.currentTarget.value),
    onBlur: (event) => cvcField.handleBlur(event.currentTarget.value),
  });

  const getPasswordInputProps = (): CardRegisterInputProps => ({
    type: 'password',
    inputMode: 'numeric',
    value: passwordField.password,
    maxLength: 2,
    placeholder: '**',
    onChange: (event) => passwordField.handleChange(event.currentTarget.value),
    onBlur: (event) => passwordField.handleBlur(event.currentTarget.value),
  });

  const handleSubmit = () => {
    const cardPrefix = numberField.cardNumbers[0];
    const selectedCompany = companyField.selectedCompany;

    if (!isFormComplete || !cardPrefix || !selectedCompany) {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
      return;
    }

    setSubmitError('');

    const completeState: CardRegisterCompleteState = {
      cardPrefix,
      companyName: CARD_COMPANIES[selectedCompany].name,
    };

    navigate('/complete', {
      state: completeState,
    });
  };

  // 각 컴포넌트에서 필요한 데이터만 선별하여 묶어서 반환
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
      cardCompany: {
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
    submitError,
    handleSubmit,
  };
}
