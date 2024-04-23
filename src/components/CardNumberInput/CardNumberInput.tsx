import Input from '../common/Input/Input';
import Field from '../common/Field/Field';
import Label from '../common/Label/Label';

import { hasFourDigit, isInteger } from '../../domain/validators';

import useAddCardInput, { InputType } from '../../hooks/useAddCardInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';
import { Fragment } from 'react/jsx-runtime';

interface CardNumberInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const { title, description, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CARD_NUMBER;

export default function CardNumberInput({ setCardData }: CardNumberInputProps) {
  const initialValues = {
    first: '',
    second: '',
    third: '',
    fourth: '',
  };

  const validateInputOnChange = ({ value }: InputType) => {
    if (!isInteger(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotInteger };
    }
    return { isValid: true, errorMsg: '' };
  };

  const validateInputOnBlur = ({ value }: InputType) => {
    if (!hasFourDigit(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotFourDigit };
    }
    return { isValid: true, errorMsg: '' };
  };

  const updateCardData = () => {
    setCardData('cardNumbers', Object.values(cardNumbers));
  };

  const {
    values: cardNumbers,
    errorMessage,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<CardNumbers>({
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
      {Object.keys(cardNumbers).map((n) => {
        const name = n as keyof CardNumbers;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={placeholder}
              value={cardNumbers[name]}
              isError={isError[name]}
              handleChange={onChange}
              handleOnBlur={onBlur}
              maxLength={4}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}
