import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useMoveToPage from '../../hooks/useMoveToPage';
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
  resetCardInfo: () => void;
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
    resetCardInfo,
    setCardSide,
  } = props;

  const location = useLocation();
  const { navigateToPage } = useMoveToPage('cardConfirmation');
  const [formStep, setFormStep] = useState(INITIAL_STEP);

  const goNextFormStep = (currentStep: number) => {
    setFormStep(currentStep + 1);
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

  const resetFormStep = () => {
    setFormStep(INITIAL_STEP);
  };

  const handleClickOfSubmitBtn = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('cardinfo', cardInfo);
    // 페이지 이동
    navigateToPage({ state: cardInfo });
    // reset
    resetFormStep();
    resetCardInfo();
  };

  /**
   * URL 변경 시 실행될 함수
   */
  const cleanUpURL = () => {
    const { search } = location;
    // 쿼리 문자열이 있는 경우
    if (search) {
      const newURL = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newURL);
    }
  };

  useEffect(() => {
    cleanUpURL();
  }, []);

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
          onClick={handleClickOfSubmitBtn}
        >
          확인
        </button>
      )}
    </form>
  );
}

export default CardForm;
