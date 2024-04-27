import React, { Fragment, useEffect } from 'react';

import Field from '../../common/Field/Field';
import Label from '../../common/Label/Label';
import Select from '../../common/Select/Select';

import { isNotEmptyString } from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';
import {
  AddCardFormContextType,
  useAddCardFormContext,
} from '../../../context/AddCardFormContext';

const { title, description, inputLabelText, defaultText, options } =
  ADD_CARD_FORM_FIELDS.CARD_ISSUER;

export default function CardIssuerInput({
  values: cardIssuer,
  errorMessage,
  isError,
  isFieldComplete,
  onChange,
  onBlur,
}: InputProps<CardIssuer>) {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext() as AddCardFormContextType;

  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus<HTMLSelectElement>();

  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const name = event.target.name as CardIssuerKey;

    onChange({ isValid: true, errorMessage: '', name, value });

    moveToNextInput();
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const name = event.target.name as CardIssuerKey;

    const validators = [
      { test: isNotEmptyString, errorMessage: ERRORS.invalidCardIssuer },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('cardIssuer')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  return (
    curStep >= findStep('cardIssuer') && (
      <Field
        title={title}
        description={description}
        errorMessage={errorMessage}
      >
        <Fragment key="cardIssuer">
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
            handleSelect={handleOnSelect}
            handleOnBlur={handleOnBlur}
          />
        </Fragment>
      </Field>
    )
  );
}
