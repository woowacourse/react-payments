import { ChangeEvent, useMemo } from 'react';

import {
  CARD_FORM_STEP,
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import useInput from '../../hooks/useInput';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardUserNameInputProps {
  editCardUserName: (name: string) => void;
  goNextFormStep: (currentStep: number) => void;
}
export default function CardUserNameInput(props: CardUserNameInputProps) {
  const { editCardUserName, goNextFormStep } = props;
  const { title, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;

  const validateName = (name: string) => {
    const isAlphabeticWithSpaces = CARD_USER_NAME_REGEXP.test(name);
    const isMinimumAlphabetLengthMet =
      name.trim().length >= CARD_USER.length.min;
    const isValidated = isAlphabeticWithSpaces && isMinimumAlphabetLengthMet;

    return { newError: !isValidated };
  };

  const updateCardUserName = (name: string, error: boolean) => {
    const isChangeableName = !name || !error;

    if (!isChangeableName) return;
    const newUserName = name.trim();
    // 이름 입력란의 앞뒤 공백 제거 후 카드 정보 업데이트
    editCardUserName(newUserName);
  };

  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: boolean) => {
    // 다음 입력 필드로 이동
    if (!error) goNextFormStep(CARD_FORM_STEP.userName);
  };

  const { value, setValue, error } = useInput<string, boolean>({
    initialValue: '',
    initialError: false,
    validateValue: validateName,
    updatedInfo: updateCardUserName,
    handleGoNextFormStep,
  });

  const errorMessage = useMemo(
    () => (error ? ERROR_MESSAGE.userName : undefined),
    [error],
  );

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toUpperCase();
    // userName 업데이트
    setValue(name);
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
          onChange={handleNameChange}
          value={value}
          error={error}
          isFocus
        />
      </div>
      <ErrorMessage>
        <p>{errorMessage}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}
