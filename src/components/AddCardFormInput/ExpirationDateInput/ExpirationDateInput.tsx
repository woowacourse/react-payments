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

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import { validateInput } from '../../../utils/validateInput';

const { title, description, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.EXPIRATION_DATE;

const ExpirationDateInput = ({
  values: expirationDate,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<ExpirationDate>) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as ExpirationDateKey;

    const validations = [
      { test: isInteger, errorMessage: ERRORS.isNotInteger },
    ];
    const result = validateInput(value, validations);
    onChange({ ...result, name, value });
  };

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as ExpirationDateKey;

    const validations = [
      { test: hasTwoDigit, errorMessage: ERRORS.isNotTwoDigit },
      {
        test: () => isValidMonth(expirationDate.month),
        errorMessage: ERRORS.inValidMonth,
      },
      {
        test: () => isValidDate(expirationDate),
        errorMessage: ERRORS.deprecatedCard,
      },
    ];
    const result = validateInput(value, validations);
    onBlur({ ...result, name, value });
  };

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
              handleChange={handleOnChange}
              handleOnBlur={handleOnBlur}
              maxLength={2}
            />
          </Fragment>
        );
      })}
    </Field>
  );
};

export default ExpirationDateInput;
