import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { CardInfo } from '../../modules/useCardInfoReducer';
import CardCompanySelect, {
  CardCompanySelectProps,
} from '../CardCompanySelect';
import CardCVCInput, { CardCVCInputProps } from '../CardCVCInput';
import CardExpirationPeriodInput, {
  CardExpirationPeriodFormProps,
} from '../CardExpirationPeriodInput';
import CardNumbersInput, { CardNumbersInputProps } from '../CardNumbersInput';
import CardPassword, { CardPasswordProps } from '../CardPassword';
import { CardSide } from '../CardPreview';
import CardUserNameInput, {
  CardUserNameInputProps,
} from '../CardUserNameInput';

import styles from './style.module.css';

interface CardFormProps
  extends Omit<CardPasswordProps, 'goNextFormStep'>,
    Omit<CardCVCInputProps, 'goNextFormStep'>,
    Omit<CardUserNameInputProps, 'goNextFormStep'>,
    Omit<CardExpirationPeriodFormProps, 'goNextFormStep'>,
    Omit<CardCompanySelectProps, 'goNextFormStep'>,
    Omit<CardNumbersInputProps, 'goNextFormStep'> {
  cardInfo: CardInfo;
  setCardSide: Dispatch<SetStateAction<CardSide>>;
}

const INITIAL_STEP = 1;

function CardForm(props: CardFormProps) {
  const {
    cardInfo,
    editCardCVC,
    editCardCompany,
    editCardMark,
    editCardNumbers,
    editCardPassword,
    editCardPeriod,
    editCardUserName,
    setCardSide,
  } = props;

  const [formStep, setFormStep] = useState(INITIAL_STEP);

  const goNextFormStep = (currentStep: number) => {
    setFormStep(currentStep + 1);
  };

  const resetFormStep = () => {
    setFormStep(INITIAL_STEP);
  };
  const isCardCompleted = useMemo(
    () =>
      Object.entries(cardInfo)
        .map(([key, value]) => {
          if (!value) return false;
          if (key === 'userName') return !!value;
          if (key === 'period') return value.month && value.year;
          if (key === 'numbers')
            return Object.values(value).every((number) => !!number);

          return !!value;
        })
        .every((i) => i),

    [cardInfo],
  );

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    resetFormStep();
    // TODO: 카드 등록 완료 페이지로 이동
  };

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.fieldset}>
        {formStep === 6 && <CardPassword editCardPassword={editCardPassword} />}
        {formStep >= 5 && (
          <CardCVCInput
            setCardSide={setCardSide}
            editCardCVC={editCardCVC}
            goNextFormStep={goNextFormStep}
          />
        )}
        {formStep >= 4 && (
          <CardUserNameInput
            editCardUserName={editCardUserName}
            goNextFormStep={goNextFormStep}
          />
        )}
        {formStep >= 3 && (
          <CardExpirationPeriodInput
            editCardPeriod={editCardPeriod}
            goNextFormStep={goNextFormStep}
          />
        )}
        {formStep >= 2 && (
          <CardCompanySelect
            editCardCompany={editCardCompany}
            goNextFormStep={goNextFormStep}
          />
        )}
        {formStep >= 1 && (
          <CardNumbersInput
            editCardMark={editCardMark}
            editCardNumbers={editCardNumbers}
            goNextFormStep={goNextFormStep}
          />
        )}
      </fieldset>
      {isCardCompleted && (
        <button
          className={styles.submitBtn}
          type="submit"
          onSubmit={handleSubmit}
        >
          확인
        </button>
      )}
    </form>
  );
}

export default CardForm;
