import React, { Fragment } from 'react';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import Field from '../../common/Field/Field';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { isInteger, isValidCVC } from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CVC;

export default function CVCInput({
  values: cvc,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<CVC>) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as CVCKey;

    const validators = [{ test: isInteger, errorMessage: ERRORS.isNotInteger }];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as CVCKey;

    const validators = [
      { test: isValidCVC, errorMessage: ERRORS.isNotThreeDigit },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  return (
    <Field title={title} labelText={labelText} errorMessage={errorMessage}>
      {Object.keys(cvc).map((n) => {
        const name = n as CVCKey;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={placeholder}
              value={cvc[name]}
              isError={isError[name]}
              isRequired
              handleChange={handleOnChange}
              handleOnBlur={handleOnBlur}
              maxLength={3}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}
