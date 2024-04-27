import { ChangeEvent, KeyboardEvent, useContext, useMemo } from 'react';

import {
  CARD_USER,
  CARD_USER_FORM_MESSAGE,
  CARD_USER_NAME_REGEXP,
  CardStep,
  ENTER_KEY,
  ERROR_MESSAGE,
} from '../../../constants';
import CardFormContext from '../../../contexts/CardFormContext';
import { useCardInput, useNextFormStep } from '../../../hooks';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../../ErrorMessage';
import Input from '../../Input';

import styles from './style.module.css';

export interface CardUserNameInputProps {
  goNextFormStep: (currentStep: CardStep) => void;
}
export default function CardUserNameInput(props: CardUserNameInputProps) {
  const { goNextFormStep } = props;
  const { title, subTitle, label, namePlaceholder } = CARD_USER_FORM_MESSAGE;

  const cardFormContext = useContext(CardFormContext);
  const { nextFormStep } = useNextFormStep({ currentCardStep: 'userName' });

  const validateName = (name: string) => {
    const isAlphabeticWithSpaces = CARD_USER_NAME_REGEXP.test(name);
    const isMinimumAlphabetLengthMet =
      name.trim().length >= CARD_USER.length.min;
    const isValidated = isAlphabeticWithSpaces && isMinimumAlphabetLengthMet;

    return { newError: !isValidated };
  };

  const updateCardUserName = (name: string, error: boolean) => {
    if (!cardFormContext) return;

    const isChangeableName = !name || !error;
    const newUserName = name.trim();
    // 이름 입력란의 앞뒤 공백 제거 후 카드 정보 업데이트
    cardFormContext.editCardUserName(isChangeableName ? newUserName : null);
  };

  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: boolean) => {
    // 다음 입력 필드로 이동
    if (error) return;
    if (!nextFormStep) return;
    goNextFormStep(nextFormStep);
  };

  const { value, setValue, error, setIsBlockNextStep } = useCardInput<
    string,
    boolean
  >({
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

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const { code } = event;
    setIsBlockNextStep(code !== ENTER_KEY);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.toUpperCase();
    // userName 업데이트
    setValue(name);
  };

  return (
    <CardInputSection title={title} subTitle={subTitle} childrenLabel={label}>
      <div className={styles.inputWrap}>
        <Input
          style={{ textTransform: 'uppercase' }}
          name="name"
          type="text"
          label={CARD_USER_FORM_MESSAGE.label}
          placeholder={namePlaceholder}
          onChange={handleNameChange}
          onKeyUp={handleKeyUp}
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
