import React, { Fragment } from 'react';

import Label from '../../common/Label/Label';
import Field from '../../common/Field/Field';
import Select from '../../common/Select/Select';

import { validateInput } from '../../../utils/validateInput';
import { isNotEmptyString } from '../../../domain/validators';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';

const { title, description, inputLabelText, defaultText, options } =
  ADD_CARD_FORM_FIELDS.CARD_ISSUER;

export default function CardIssuerInput({
  values: cardIssuer,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<CardIssuer>) {
  const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const name = event.target.name as CardIssuerKey;

    onChange({ isValid: true, errorMessage: '', name, value });
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

  return (
    <Field title={title} description={description} errorMessage={errorMessage}>
      {Object.keys(cardIssuer).map((n) => {
        const name = n as CardIssuerKey;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Select
              name={name}
              id={name}
              value={cardIssuer[name]}
              defaultText={defaultText}
              options={options}
              isError={isError[name]}
              isRequired
              handleSelect={handleOnSelect}
              handleOnBlur={handleOnBlur}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}
