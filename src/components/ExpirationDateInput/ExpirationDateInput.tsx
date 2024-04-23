import Input from '../common/Input/Input';
import Field from '../common/Field/Field';
import Label from '../common/Label/Label';

import {
  isInteger,
  hasTwoDigit,
  isValidMonth,
  isValidDate,
} from '../../domain/validators';

import useAddCardInput, { InputType } from '../../hooks/useAddCardInput';

import { ERRORS, ADD_CARD_FORM_FIELDS } from '../../constants/messages';
import { Fragment } from 'react/jsx-runtime';

const { title, description, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.EXPIRATION_DATE;

interface ExpirationDateInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const ExpirationDateInput = ({ setCardData }: ExpirationDateInputProps) => {
  const initialValues = {
    month: '',
    year: '',
  };

  const validateInputOnChange = ({ value }: { value: string }) => {
    if (!isInteger(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotInteger };
    }
    return { isValid: true, errorMsg: '' };
  };

  const validateInputOnBlur = ({ value }: InputType) => {
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

  const updateCardData = () => {
    setCardData('expirationDate', Object.values(expirationDate));
  };

  const {
    values: expirationDate,
    errorMessage,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<ExpirationDate>({
    initialValues,
    validateInputOnChange,
    validateInputOnBlur,
    updateCardData,
  });

  return (
    <Field
      title={title}
      description={description}
      labelText={labelText}
      errorMessage={errorMessage}
    >
      {Object.keys(expirationDate).map((n) => {
        const name = n as keyof ExpirationDate;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={
                name === 'month' ? placeholder.month : placeholder.year
              }
              value={expirationDate[name]}
              isError={isError[name]}
              handleChange={onChange}
              handleOnBlur={onBlur}
              maxLength={2}
            />
          </Fragment>
        );
      })}
    </Field>
  );
};

export default ExpirationDateInput;
