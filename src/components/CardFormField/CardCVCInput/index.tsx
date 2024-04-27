import { ChangeEvent, useContext } from 'react';

import {
  CARD_CVC,
  CARD_CVC_MESSAGE,
  CARD_CVC_REGEXP,
  CardStep,
  ERROR_MESSAGE,
} from '../../../constants';
import CardFormContext from '../../../contexts/CardFormContext';
import { useCardInput, useNextFormStep } from '../../../hooks';
import { CardSide } from '../../CardPreviewComponents/CardPreview';
import ErrorMessage from '../../ErrorMessage';
import Input from '../../Input';
import CardInputSection from '../CardInputSection';

import styles from './style.module.css';

export interface CardCVCInputProps {
  goNextFormStep: (currentStep: CardStep) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const { goNextFormStep } = props;

  const cardFormContext = useContext(CardFormContext);
  const { nextFormStep } = useNextFormStep({ currentCardStep: 'cvc' });

  const validateCVC = (text: string) => ({
    newError: !CARD_CVC_REGEXP.test(text),
  });

  const updateCardCVC = (value: string, error: boolean) => {
    if (!cardFormContext) return;
    cardFormContext.editCardCVC(error ? null : value);
  };

  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: boolean) => {
    if (error) return;
    if (!nextFormStep) return;
    // UI에 cvc 가 나오고 다음 단계로 넘어감
    setTimeout(() => {
      goNextFormStep(nextFormStep);
    }, 800);
  };

  const { value, setValue, error } = useCardInput<string, boolean>({
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

  const handleCVCFocus = (cardSide: CardSide) => {
    if (!cardFormContext) return;
    cardFormContext.setCardSide(cardSide);
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
          onBlur={() => handleCVCFocus('front')}
          onFocus={() => handleCVCFocus('back')}
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
