import React, { Fragment, useRef } from 'react';

import Label from '../../common/Label/Label';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';

import { validateInput } from '../../../utils/validateInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import {
  hasTwoDigit,
  isInteger,
  isNotEmptyString,
} from '../../../domain/validators';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

const { title, description, labelText, inputLabelText, placeholder } =
  ADD_CARD_FORM_FIELDS.PASSWORD;

export default function PasswordInput({
  values: password,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<Password>) {
  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus([useRef<HTMLInputElement>(null)]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as PasswordKey;

    const validators = [{ test: isInteger, errorMessage: ERRORS.isNotInteger }];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });

    if (value.length === ref.current?.maxLength) moveToNextInput();
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as PasswordKey;

    const validators = [
      { test: isNotEmptyString, errorMessage: ERRORS.invalidPassword },
      { test: hasTwoDigit, errorMessage: ERRORS.isNotTwoDigit },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  return (
    <Field
      title={title}
      description={description}
      labelText={labelText}
      errorMessage={errorMessage}
    >
      <Fragment key="password">
        <Label
          htmlFor="password"
          labelText={inputLabelText.password}
          hideLabel
        />
        <Input
          ref={ref}
          id="password"
          name="password"
          type="password"
          value={password.password}
          isError={isError.password}
          placeholder={placeholder}
          isRequired
          handleChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          maxLength={2}
        />
      </Fragment>
    </Field>
  );
}
