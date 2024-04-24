import React, { Fragment } from 'react';

import { ADD_CARD_FORM_FIELDS } from '../../../constants/messages';
import Field from '../../common/Field/Field';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CVC;

export default function CVCInput({
  values: cvc,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<CVC>) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {};

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
              maxLength={26}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}
