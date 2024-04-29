import React, { Fragment, useEffect } from 'react';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

import { validateInput } from '../../../utils/validateInput';
import { isInteger, isValidCVC } from '../../../domain/validators';
import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import {
  AddCardFormContextType,
  useAddCardFormContext,
} from '../../../context/AddCardFormContext';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CVC;
const MAX_LENGTH = 3;

export default function CVCInput({
  values: cvc,
  errorMessage,
  isError,
  isFieldComplete,
  onChange,
  onBlur,
}: InputProps<CVC>) {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext() as AddCardFormContextType;

  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus<HTMLInputElement>();

  const name: CVCKey = 'cvc';
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const validators = [{ test: isInteger, errorMessage: ERRORS.isNotInteger }];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });

    if (value.length === ref.current?.maxLength) moveToNextInput();
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const validators = [
      { test: isValidCVC, errorMessage: ERRORS.isNotThreeDigit },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('cvc')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  const isVisible = curStep >= findStep('cvc');
  if (!isVisible) return null;
  return (
    <Field title={title} labelText={labelText} errorMessage={errorMessage}>
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
    </Field>
  );
}
