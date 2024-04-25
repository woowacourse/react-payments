import React, { Fragment, useRef } from 'react';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import Field from '../../common/Field/Field';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import { isInteger, isValidCVC } from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CVC;
const MAX_LENGTH = 3;

export default function CVCInput({
  values: cvc,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<CVC>) {
  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus([useRef<HTMLInputElement>(null)]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as CVCKey;

    const validators = [{ test: isInteger, errorMessage: ERRORS.isNotInteger }];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });

    if (value.length === ref.current?.maxLength) moveToNextInput();
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
      <Fragment key="cvc">
        <Label htmlFor="cvc" labelText={inputLabelText.cvc} hideLabel />
        <Input
          ref={ref}
          id="cvc"
          name="cvc"
          placeholder={placeholder}
          value={cvc.cvc}
          isError={isError.cvc}
          isRequired
          handleChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          maxLength={MAX_LENGTH}
        />
      </Fragment>
    </Field>
  );
}
