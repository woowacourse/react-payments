import React, { ChangeEvent, useState } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import debounceFunc from '../../utils/debounceFunc';
import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import Input from '../Input';

export default function CardUserForm() {
  const { title, subTitle, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;
  const { length } = CARD_USER;

  const [inputName, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const validateName = (name: string) => {
    const regex = new RegExp(`^[a-zA-Z]{1,${length}}$`);
    const isValidated = regex.test(name);

    setError(!isValidated);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    validateName(value);

    debounceFunc(() => {
      setName(value.toUpperCase());
    }, 10);
  };

  return (
    <CardInputFormContainer title={title} subTitle={subTitle}>
      <CardInputForm label={label}>
        <div>
          <div onChange={handleChange}>
            <Input
              style={{ textTransform: 'uppercase' }}
              name="month"
              type="text"
              placeholder={namePlaceholder}
              maxLength={length}
              value={inputName}
            />
          </div>
          <div>{error && ERROR_MESSAGE.userName}</div>
        </div>
      </CardInputForm>
    </CardInputFormContainer>
  );
}
