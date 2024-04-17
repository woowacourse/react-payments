import React, { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import debounceFunc from '../../utils/debounceFunc';
import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

interface CardUserFormProps {
  editCardUserName: (name: string | undefined) => void;
}
export default function CardUserForm(props: CardUserFormProps) {
  const { editCardUserName } = props;
  const { title, subTitle, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;
  const { length } = CARD_USER;

  const [userName, setUserName] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  const validateName = (name: string) => {
    const regex = new RegExp(`^[a-zA-Z\\s]{1,${length}}$`);
    const isValidated = regex.test(name);

    setError(!isValidated);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = value.toUpperCase();

    debounceFunc(() => {
      validateName(value);
      setUserName(name);
    }, 10);
  };

  const getErrorMessage = () => {
    if (error) return ERROR_MESSAGE.userName;
    return;
  };

  useEffect(() => {
    if (!error || userName === '') {
      editCardUserName(userName || undefined);
    }
  }, [userName, error]);

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
            />
          </div>
          <FormErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </CardInputForm>
    </CardInputFormContainer>
  );
}
