import { Fragment } from 'react/jsx-runtime';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';

import {
  hasTwoDigit,
  isInteger,
  isValidDate,
  isValidMonth,
} from '../../../domain/validators';

import { useEffect } from 'react';
import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import { useAddCardFormContext } from '../../../context/AddCardFormContext';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';
import { validateInput } from '../../../utils/validateInput';

const { title, description, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.EXPIRATION_DATE;
const MAX_LENGTH = 2;

const ExpirationDateInput = ({
  values: expirationDate,
  errorMessage,
  isError,
  isFieldComplete,
  handleInputChange,
  handleInputBlur,
}: InputProps<ExpirationDate>) => {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext();

  const { refs, moveToNextInput } = useFormFieldFocus<HTMLInputElement>(2);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as ExpirationDateKey;

    const validations = [
      { test: isInteger, errorMessage: ERRORS.isNotInteger },
    ];
    const result = validateInput(value, validations);
    handleInputChange({ ...result, name, value });

    if (value.length === MAX_LENGTH)
      moveToNextInput(
        Object.keys(expirationDate).findIndex((key) => key === name)
      );
  };

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as ExpirationDateKey;

    const validations = [
      { test: hasTwoDigit, errorMessage: ERRORS.isNotTwoDigit },
      {
        test: () => name === 'year' || isValidMonth(value),
        errorMessage: ERRORS.inValidMonth,
      },
      {
        test: () =>
          isValidDate({
            month: refs[0].current?.value ?? '',
            year: refs[1].current?.value ?? '',
          }),
        errorMessage: ERRORS.deprecatedCard,
      },
    ];
    const result = validateInput(value, validations);
    handleInputBlur({ ...result, name, value });
  };

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('expirationDate')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  const isVisible = curStep >= findStep('expirationDate');
  if (!isVisible) return null;
  return (
    <Field
      title={title}
      description={description}
      labelText={labelText}
      errorMessage={errorMessage}
    >
      {Object.keys(expirationDate).map((n, index) => {
        const name = n as keyof ExpirationDate;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              ref={refs[index]}
              id={name}
              name={name}
              placeholder={
                name === 'month' ? placeholder.month : placeholder.year
              }
              value={expirationDate[name]}
              isError={isError[name]}
              autoFocus={index === 0}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              maxLength={MAX_LENGTH}
            />
          </Fragment>
        );
      })}
    </Field>
  );
};

export default ExpirationDateInput;
