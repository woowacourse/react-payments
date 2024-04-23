import { ChangeEvent, useMemo, useState } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardUserNameInputProps {
  editCardUserName: (name: string) => void;
}
export default function CardUserNameInput(props: CardUserNameInputProps) {
  const { editCardUserName } = props;
  const { title, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;

  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState(false);

  const errorMessage = useMemo(
    () => (nameError ? ERROR_MESSAGE.userName : undefined),
    [nameError],
  );

  const validateName = (name: string) => {
    const isAlphabeticWithSpaces = CARD_USER_NAME_REGEXP.test(name);
    const isMinimumAlphabetLengthMet =
      name.trim().length >= CARD_USER.length.min;
    const isValidated = isAlphabeticWithSpaces && isMinimumAlphabetLengthMet;

    return isValidated;
  };

  const handleEditCardUserName = (error: boolean, name: string) => {
    if (!error || name === '') {
      // 이름 입력란의 앞뒤 공백 제거 후 카드 정보 업데이트
      editCardUserName(name.trim());
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = value.toUpperCase();
    // userName 업데이트
    setUserName(name);
    // 유효성 검사 진행 후 nameError 업데이트
    const isValidated = validateName(value);
    setNameError(!isValidated);
    // cardInfo 업데이트
    handleEditCardUserName(!isValidated, name);
  };

  return (
    <CardInputSection title={title} childrenLabel={label}>
      <div className={styles.inputWrap}>
        <Input
          style={{ textTransform: 'uppercase' }}
          name="name"
          type="text"
          label={CARD_USER_FORM_MESSAGE.label}
          placeholder={namePlaceholder}
          onChange={handleChange}
          value={userName}
          error={nameError}
        />
      </div>
      <ErrorMessage>
        <p>{errorMessage}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}
