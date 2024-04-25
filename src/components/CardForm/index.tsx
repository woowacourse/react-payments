import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

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
import CardPasswordInput, {
  CardPasswordInputProps,
} from '../CardPasswordInput';
import { CardSide } from '../CardPreview';
import CardUserNameInput, {
  CardUserNameInputProps,
} from '../CardUserNameInput';

import styles from './style.module.css';

interface CardFormProps
  extends Omit<CardPasswordInputProps, 'goNextFormStep'>,
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
  /**
   * 카드 정보 입력이 왼료되었는지 확인
   */
  const isCardEnrollmentCompleted = useMemo(
    () =>
      Object.entries(cardInfo)
        .map(([key, value]) => {
          // value의 타입에 따라서 입력 완료 검사 진행
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
  /**
   * layout이 적용되는 지 여부에 따라 btn의 위치 조정
   */
  const btnStyle = useMemo(() => {
    const $layout = document.getElementById('layout');
    // 스토리북의 경우 layout이 적용되지 않음
    if (!$layout) return { left: 0 };
    const computedStyle = window.getComputedStyle($layout, null);
    const leftPadding = computedStyle.getPropertyValue('padding-left');

    return {
      left: `-${leftPadding}`,
    };
  }, [isCardEnrollmentCompleted]);

  const resetFormStep = () => {
    setFormStep(INITIAL_STEP);
  };

  const handleClickOfSubmitBtn = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // 카드 등록 완료 페이지로 이동
    navigateToPage({ state: cardInfo });
    // form, cardInfo 초기화
    resetFormStep();
    resetCardInfo();
  };

  /**
   * url 변경 시 실행될 함수
   * 카드 등록 페이지로 돌아오거나 새로고침 시 url에 form의 입력 필드의 값들이 포함되는 오류를 수정하기 위해 사용
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
        {formStep === 6 && (
          <CardPasswordInput editCardPassword={editCardPassword} />
        )}
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
      {isCardEnrollmentCompleted && (
        <button
          className={styles.submitBtn}
          type="submit"
          style={btnStyle}
          onClick={handleClickOfSubmitBtn}
        >
          확인
        </button>
      )}
    </form>
  );
}

export default CardForm;
