import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import {
  CARD_CVC,
  CARD_CVC_MESSAGE,
  CARD_CVC_REGEXP,
  CARD_FORM_STEP,
  ERROR_MESSAGE,
} from '../../constants';
import useInput from '../../hooks/useInput';
import CardInputSection from '../CardInputSection';
import { CardSide } from '../CardPreview';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardCVCInputProps {
  setCardSide: Dispatch<SetStateAction<CardSide>>;
  editCardCVC: (cvc: string | null) => void;
  goNextFormStep: (currentStep: number) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const { editCardCVC, setCardSide, goNextFormStep } = props;

  const validateCVC = (text: string) => ({
    newError: !CARD_CVC_REGEXP.test(text),
  });

  const updateCardCVC = (value: string, error: boolean) => {
    editCardCVC(error ? null : value);
  };

  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: boolean) => {
    if (error) return;
    // UI에 cvc 가 나오고 다음 단계로 넘어감
    setTimeout(() => {
      goNextFormStep(CARD_FORM_STEP.cvc);
    }, 1000);
  };

  const { value, setValue, error } = useInput<string, boolean>({
    initialValue: '',
    initialError: false,
    validateValue: validateCVC,
    updatedInfo: updateCardCVC,
    handleGoNextFormStep,
  });

  const handleCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    // cvc 업데이트
    setValue(targetValue);
  };

  return (
    <CardInputSection
      title={CARD_CVC_MESSAGE.title}
      childrenLabel={CARD_CVC_MESSAGE.label}
    >
      <div className={styles.inputWrap}>
        <Input
          label={CARD_CVC_MESSAGE.label}
          placeholder={CARD_CVC_MESSAGE.placeholder}
          error={error}
          type="text"
          maxLength={CARD_CVC.length}
          onChange={handleCVCChange}
          onBlur={() => setCardSide('front')}
          onFocus={() => setCardSide('back')}
          value={value}
          isFocus
        />
      </div>
      <ErrorMessage>
        <p>{error ? ERROR_MESSAGE.cvc : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardCVCInput;
