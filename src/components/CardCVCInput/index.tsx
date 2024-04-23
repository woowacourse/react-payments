import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import {
  CARD_CVC,
  CARD_CVC_MESSAGE,
  CARD_CVC_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import { sliceText } from '../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import { CardSide } from '../CardPreview';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardCVCInputProps {
  setCardSide: Dispatch<SetStateAction<CardSide>>;
  editCardCVC: (cvc: string) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const { editCardCVC, setCardSide } = props;

  const [cvc, setCVC] = useState('');
  const [cvcError, setCVCError] = useState(false);

  const validateCVC = (text: string) => CARD_CVC_REGEXP.test(text);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // cvc 업데이트
    const newCVC = sliceText(value, CARD_CVC.length);
    setCVC(newCVC);
    // 유효성 검사
    const isValidated = validateCVC(newCVC);
    // cvcError 업데이트
    setCVCError(!isValidated);
    // cardInfo 업데이트
    if (isValidated) editCardCVC(newCVC);
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
          error={cvcError}
          type="number"
          onChange={handleChange}
          onBlur={() => setCardSide('front')}
          onFocus={() => setCardSide('back')}
          value={cvc}
        />
      </div>
      <ErrorMessage>
        <p>{cvcError ? ERROR_MESSAGE.cvc : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardCVCInput;
