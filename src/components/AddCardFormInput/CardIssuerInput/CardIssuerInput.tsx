import React, { useEffect } from 'react';

import Field from '../../common/Field/Field';
import Label from '../../common/Label/Label';
import Select from '../../common/Select/Select';

import { isNotEmptyString } from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import { useAddCardFormContext } from '../../../context/AddCardFormContext';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

const { title, description, inputLabelText, defaultText, options } =
  ADD_CARD_FORM_FIELDS.CARD_ISSUER;

export default function CardIssuerInput({
  values: cardIssuer,
  errorMessage,
  isError,
  isFieldComplete,
  handleInputChange,
  handleInputBlur,
}: InputProps<CardIssuer>) {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext();

  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus<HTMLSelectElement>();

  const name: CardIssuerKey = 'cardIssuer';
  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    handleInputChange({ isValid: true, errorMessage: '', name, value });

    moveToNextInput();
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    const validators = [
      { test: isNotEmptyString, errorMessage: ERRORS.invalidCardIssuer },
    ];
    const result = validateInput(value, validators);
    handleInputBlur({ ...result, name, value });
  };

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('cardIssuer')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  const isVisible = curStep >= findStep('cardIssuer');
  if (!isVisible) return null;
  return (
    <Field title={title} description={description} errorMessage={errorMessage}>
      <Label
        htmlFor="cardIssuer"
        labelText={inputLabelText.cardIssuer}
        hideLabel
      />
      <Select
        ref={ref}
        name="cardIssuer"
        id="cardIssuer"
        value={cardIssuer.cardIssuer}
        defaultText={defaultText}
        options={options}
        isError={isError.cardIssuer}
        isRequired
        onChange={handleOnSelect}
        onBlur={handleOnBlur}
      />
    </Field>
  );
}
