import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useCardNumbers} from './useCardNumbers';
import {useCompanySelect} from './useCompanySelect';
import {useExpiryDate} from './useExpiryDate';
import {useCvcNumber} from './useCvcNumber';
import {useCardPassword} from './useCardPassword';

import {createCard} from '@/api/cardsApi';
import type {CardErrorResponse, CreateCardRequest} from '@/domain/card/cardApi.types';
import {CARD_COMPANIES} from '@/domain/card/cardCompany';
import type {CardRegisterInputProps, ExpiryInputProps} from '../../components/inputs/shared.types';

const generateNumberPlaceholder = (length: number) => Array.from({length}, (_, i) => (i + 1) % 10).join('');
const SUBMIT_ERROR_MESSAGE = '카드 정보를 다시 확인해 주세요';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

type ServerFieldErrors = {
  cardNumbers: string;
  cardCompany: string;
  cardExpiryDate: string;
  cardCvc: string;
};

const createEmptyServerFieldErrors = (): ServerFieldErrors => ({
  cardNumbers: '',
  cardCompany: '',
  cardExpiryDate: '',
  cardCvc: '',
});

const getServerFieldName = (code?: string): keyof ServerFieldErrors | null => {
  if (code === 'INVALID_CARD_NUMBER') return 'cardNumbers';
  if (code === 'INVALID_CVC') return 'cardCvc';
  if (code === 'INVALID_EXPIRATION_DATE') return 'cardExpiryDate';
  if (code === 'INVALID_ISSUER_CODE') return 'cardCompany';

  return null;
};

export function useCardRegisterForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverFieldErrors, setServerFieldErrors] = useState(createEmptyServerFieldErrors);

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

  const clearServerFieldError = (fieldName: keyof ServerFieldErrors) => {
    setServerFieldErrors((prev) => ({
      ...prev,
      [fieldName]: '',
    }));
  };

  const createCardRequest = (selectedCompany: NonNullable<typeof companyField.selectedCompany>): CreateCardRequest => ({
    number: numberField.cardNumbers.join(''),
    expirationDate: `${expiryField.expiryDate[0]}/${expiryField.expiryDate[1]}`,
    cvc: cvcField.cvcNumber,
    issuerCode: CARD_COMPANIES[selectedCompany].issuerCode,
  });

  const getNumberInputProps = (): CardRegisterInputProps[] =>
    numberField.format.map((maxLength, index) => ({
      type: 'text',
      inputMode: 'numeric',
      value: numberField.cardNumbers[index] ?? '',
      maxLength: maxLength,
      placeholder: generateNumberPlaceholder(maxLength),
      onChange: (event) => {
        clearServerFieldError('cardNumbers');
        numberField.handleChange(index, event.currentTarget.value);
      },
      onBlur: (event) => numberField.handleBlur(index, event.currentTarget.value),
    }));

  const createExpiryInputProps = (index: 0 | 1): CardRegisterInputProps => ({
    type: 'text',
    inputMode: 'numeric',
    value: expiryField.expiryDate[index],
    maxLength: 2,
    placeholder: ['MM', 'YY'][index],
    onChange: (event) => {
      clearServerFieldError('cardExpiryDate');
      expiryField.handleChange(index, event.currentTarget.value);
    },
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
    onChange: (event) => {
      clearServerFieldError('cardCvc');
      cvcField.handleChange(event.currentTarget.value);
    },
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

  const handleCompanyChange = (value: typeof companyField.selectedCompany) => {
    clearServerFieldError('cardCompany');
    companyField.handleChange(value);
  };

  const handleSubmit = async () => {
    const cardPrefix = numberField.cardNumbers[0];
    const selectedCompany = companyField.selectedCompany;

    if (!isFormComplete || !cardPrefix || !selectedCompany) {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
      return;
    }

    setSubmitError('');
    setSubmitStatus('loading');
    setServerFieldErrors(createEmptyServerFieldErrors());

    try {
      await createCard(createCardRequest(selectedCompany));
      setSubmitStatus('success');
      navigate('/cards');
    } catch (error) {
      const cardError = error as CardErrorResponse;
      const fieldName = getServerFieldName(cardError.code);

      setSubmitStatus('error');

      if (!fieldName) {
        setSubmitError(SUBMIT_ERROR_MESSAGE);
        return;
      }

      setServerFieldErrors((prev) => ({
        ...prev,
        [fieldName]: cardError.message,
      }));
    }
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
        errorMessage: numberField.errMsg || serverFieldErrors.cardNumbers,
        errorIndex: numberField.firstErrIdx,
      },
      cardCompany: {
        selectedCompany: companyField.selectedCompany,
        onChange: handleCompanyChange,
        errorMessage: serverFieldErrors.cardCompany,
      },
      cardExpiryDate: {
        inputProps: getExpiryInputProps(),
        errorMessage: expiryField.errMsg || serverFieldErrors.cardExpiryDate,
        errorIndex: expiryField.firstErrIdx,
      },
      cardCvc: {
        inputProps: getCvcInputProps(),
        errorMessage: cvcField.errMsg || serverFieldErrors.cardCvc,
      },
      cardPassword: {
        inputProps: getPasswordInputProps(),
        errorMessage: passwordField.errMsg,
      },
    },
    visibleFields,
    isFormComplete,
    submitStatus,
    submitError,
    handleSubmit,
  };
}
