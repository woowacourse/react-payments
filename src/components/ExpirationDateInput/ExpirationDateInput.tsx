import Input from '../common/Input/Input';
import Field from '../layout/Field/Field';

import {
  isInteger,
  hasTwoDigit,
  isValidMonth,
  isValidDate,
} from '../../domain/validators';

import { ERRORS, ADD_CARD_FORM_FIELDS } from '../../constants/messages';
import useAddCardInput from '../../hooks/useAddCardInput';

const { EXPIRATION_DATE } = ADD_CARD_FORM_FIELDS;

interface ExpirationDateInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const ExpirationDateInput = ({ setCardData }: ExpirationDateInputProps) => {
  const validateInputOnChange = ({ value }: { value: string }) => {
    if (!isInteger(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotFourDigit };
    }
    return { isValid: true, errorMsg: '' };
  };

  const validateInputOnBlur = ({ value }: { name?: string; value: string }) => {
    if (!hasTwoDigit(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotTwoDigit };
    }

    if (!isValidMonth(expirationDate.month)) {
      return { isValid: false, errorMsg: ERRORS.inValidMonth };
    }

    if (!isValidDate(expirationDate)) {
      return { isValid: false, errorMsg: ERRORS.deprecatedCard };
    }

    return { isValid: true, errorMsg: '' };
  };

  const processData = () => {
    setCardData('expirationDate', Object.values(expirationDate));
  };

  const {
    values: expirationDate,
    errMsg,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<ExpirationDate>({
    initialValues: {
      month: '',
      year: '',
    },
    initialErrors: {
      month: false,
      year: false,
    },
    validateInputOnChange,
    validateInputOnBlur,
    processData,
  });

  return (
    <Field
      title={EXPIRATION_DATE.title}
      description={EXPIRATION_DATE.description}
      labelText={EXPIRATION_DATE.labelText}
      errMsg={errMsg}
    >
      {Object.keys(expirationDate).map((name) => (
        <Input
          key={name}
          name={name as keyof ExpirationDate}
          placeholder={
            name === 'month'
              ? EXPIRATION_DATE.placeholder.month
              : EXPIRATION_DATE.placeholder.year
          }
          value={expirationDate[name as keyof ExpirationDate]}
          isError={isError[name as keyof ExpirationDate]}
          handleChange={onChange}
          handleOnBlur={onBlur}
          maxLength={2}
        ></Input>
      ))}
    </Field>
  );
};

export default ExpirationDateInput;
