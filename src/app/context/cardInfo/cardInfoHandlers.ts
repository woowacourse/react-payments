import { ErrorProps } from '../../../shared/model/types';
import { NO_ERROR } from '../../../shared/constants/errorConstants';
import {
  cardCVCValidator,
  cardExpirationDateValidator,
  cardIssuerValidator,
  cardNumberValidator,
  cardPasswordValidator,
} from '../../../features/cardInfo/validation/cardInfoValidator';

const VALIDATORS = {
  cardNumber: cardNumberValidator,
  cardExpirationDate: cardExpirationDateValidator,
  cardCVC: cardCVCValidator,
  cardIssuer: cardIssuerValidator,
  cardPassword: cardPasswordValidator,
} as const;

const ERROR_KEYS = {
  cardNumber: 'cardNumberError',
  cardExpirationDate: 'cardExpirationDateError',
  cardCVC: 'cardCVCError',
  cardIssuer: 'cardIssuerError',
  cardPassword: 'cardPasswordError',
} as const;

const validateAndSetError = (
  key: keyof typeof VALIDATORS,
  value: any,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  const validator = VALIDATORS[key];
  const errorKey = ERROR_KEYS[key] as keyof ErrorProps;
  const [errorIndex, errorMessage] = validator(value);
  setError((prevError) => ({
    ...prevError,
    [errorKey]: errorIndex !== NO_ERROR ? { errorIndex, errorMessage } : { errorIndex: NO_ERROR, errorMessage: '' },
  }));
};

export const handleCardNumberChange = (
  name: string,
  value: string,
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  const index = Number(name[name.length - 1]);
  setCardNumber((prev) => {
    const updatedNumbers = prev.map((num, i) => (i === index ? value : num));
    validateAndSetError('cardNumber', updatedNumbers, setError);
    return updatedNumbers;
  });
};

export const handleCardExpirationDateChange = (
  name: string,
  value: string,
  setCardExpirationDate: React.Dispatch<React.SetStateAction<{ month: string; year: string }>>,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  const key = name.split('-')[1] as 'month' | 'year';
  setCardExpirationDate((prev) => {
    const updateDate = { ...prev, [key]: value };
    validateAndSetError('cardExpirationDate', updateDate, setError);
    return updateDate;
  });
};

export const handleCardCVCChange = (
  value: string,
  setCardCVC: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  setCardCVC(() => {
    validateAndSetError('cardCVC', value, setError);
    return value;
  });
};

export const handleCardIssuerChange = (
  value: string,
  setCardIssuer: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  setCardIssuer(() => {
    validateAndSetError('cardIssuer', value, setError);
    return value;
  });
};

export const handleCardPasswordChange = (
  value: string,
  setCardPassword: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<ErrorProps>>
) => {
  setCardPassword(() => {
    validateAndSetError('cardPassword', value, setError);
    return value;
  });
};
