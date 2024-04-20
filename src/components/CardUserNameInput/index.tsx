import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

interface CardUserNameInputProps {
  editCardUserName: (name: string) => void;
}
export default function CardUserNameInput(props: CardUserNameInputProps) {
  const { editCardUserName } = props;
  const { title, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;

  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);

  const errorMessage = useMemo(
    () => (error ? ERROR_MESSAGE.userName : undefined),
    [error],
  );

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

    setUserName(name);
    validateName(value);
  };

  useEffect(() => {
    if (!error || userName === '') {
      // 이름 입력란의 앞뒤 공백 제거 후 카드 정보 업데이트
      editCardUserName(userName?.trim());
    }
  }, [userName, error]);

  return (
    <CardInputContainer title={title}>
      <CardInput label={label}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              style={{ textTransform: 'uppercase' }}
              name="month"
              type="text"
              placeholder={namePlaceholder}
              onChange={handleChange}
              value={userName}
              error={error}
            />
          </div>
          <FormErrorMessage>
            <p>{errorMessage}</p>
          </FormErrorMessage>
        </div>
      </CardInput>
    </CardInputContainer>
  );
}
