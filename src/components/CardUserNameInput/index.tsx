import { ChangeEvent, useMemo, useState } from 'react';

import {
  CARD_FORM_STEP,
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  ERROR_MESSAGE,
  FIRST_INPUT_INDEX,
} from '../../constants';
import useFocusRef from '../../hooks/useFocusRef';
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

  const { focusTargetRef } = useFocusRef<HTMLDivElement>(FIRST_INPUT_INDEX);
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

  /**
   * 사용자 이름과 오류 여부에 따라 cardInfo의 userName 업데이트와 다음 입력 필드 단계를 진행하는 함수
   */
  const updateCardInfoUserName = (error: boolean, name: string) => {
    if (error && name) return;
    const newUserName = name.trim();

    // 이름 입력란의 앞뒤 공백 제거 후 카드 정보 업데이트
    editCardUserName(newUserName);

    // 다음 입력 필드로 이동
    if (newUserName) goNextFormStep(CARD_FORM_STEP.userName);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = value.toUpperCase();
    // userName 업데이트
    setUserName(name);
    // 유효성 검사 진행 후 nameError 업데이트
    const isValidated = validateName(value);
    setNameError(!isValidated);

    // cardInfo 업데이트 및 다음 입력 단게 진행
    updateCardInfoUserName(!name || !isValidated, name);
  };

  return (
    <CardInputSection title={title} childrenLabel={label}>
      <div ref={focusTargetRef} className={styles.inputWrap}>
        <Input
          style={{ textTransform: 'uppercase' }}
          name="name"
          type="text"
          label={CARD_USER_FORM_MESSAGE.label}
          placeholder={namePlaceholder}
          onChange={handleNameChange}
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
