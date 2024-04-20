import { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import debounceFunc from '../../utils/debounceFunc';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

interface CardUserNameInputProps {
  editCardUserName: (name: string | undefined) => void;
}
export default function CardUserNameInput(props: CardUserNameInputProps) {
  const { editCardUserName } = props;
  const { title, subTitle, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;

  const [userName, setUserName] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  const validateName = (name: string) => {
    const isAlphabeticWithSpaces = CARD_USER_NAME_REGEXP.test(name);
    const isMinimumAlphabetLengthMet =
      name.trim().length >= CARD_USER.length.min;
    const isValidated = isAlphabeticWithSpaces && isMinimumAlphabetLengthMet;

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
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div>
          <div className={styles.inputWrap} onChange={handleChange}>
            <Input
              style={{ textTransform: 'uppercase' }}
              name="month"
              type="text"
              placeholder={namePlaceholder}
              maxLength={length}
              error={error}
            />
          </div>
          <FormErrorMessage>
            <p>{getErrorMessage()}</p>
          </FormErrorMessage>
        </div>
      </CardInput>
    </CardInputContainer>
  );
}
