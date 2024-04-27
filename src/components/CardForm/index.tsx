import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import { CardStep } from '../../constants';
import CardFormContext from '../../contexts/CardFormContext';
import useMoveToPage from '../../hooks/useMoveToPage';
import CardCompanySelect from '../CardCompanySelect';
import CardCVCInput from '../CardCVCInput';
import CardExpirationPeriodInput from '../CardExpirationPeriodInput';
import CardNumbersInput from '../CardNumbersInput';
import CardPasswordInput from '../CardPasswordInput';
import CardUserNameInput from '../CardUserNameInput';

import styles from './style.module.css';

function CardForm() {
  const cardFormContext = useContext(CardFormContext);

  const { navigateToPage } = useMoveToPage('cardConfirmation');
  const [openFormFields, setOpenFormFields] = useState<CardStep[]>(['numbers']);
  const layoutRef = useRef<HTMLElement>();
  const location = useLocation();

  const goNextFormStep = (currentStep: CardStep) => {
    setOpenFormFields((prev) => [...prev, currentStep]);
  };
  /**
   * 카드 정보 입력이 왼료되었는지 확인
   */
  const isCardEnrollmentCompleted = useMemo(() => {
    if (!cardFormContext) return;

    return Object.entries(cardFormContext?.cardInfo)
      .map(([key, value]) => {
        // value의 타입에 따라서 입력 완료 검사 진행
        if (!value) return false;
        if (key === 'userName') return !!value;
        if (key === 'period') return value.month && value.year;
        if (key === 'numbers')
          return Object.values(value).every((number) => !!number);

        return !!value;
      })
      .every((i) => i);
  }, [cardFormContext?.cardInfo]);

  /**
   * layout이 적용되는 지 여부에 따라 btn의 위치 조정
   */
  const btnStyle = useMemo(() => {
    if (!layoutRef.current) return { left: 0 };

    const computedStyle = window.getComputedStyle(layoutRef.current, null);
    const leftPadding = computedStyle.getPropertyValue('padding-left');

    return {
      left: `-${leftPadding}`,
    };
  }, [layoutRef.current]);

  const resetFormStep = () => {
    setOpenFormFields(['numbers']);
  };

  const isOpenFormFiled = useCallback(
    (step: CardStep) => openFormFields.find((i) => i === step),
    [openFormFields],
  );

  const handleClickOfSubmitBtn = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!cardFormContext) return;
    // 카드 등록 완료 페이지로 이동
    navigateToPage({ state: cardFormContext.cardInfo });
    // form, cardInfo 초기화
    resetFormStep();
    cardFormContext.resetCardInfo();
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
    const $layout = document.getElementById('layout');
    if ($layout) layoutRef.current = $layout;
  }, []);

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.fieldset}>
        {isOpenFormFiled('password') && <CardPasswordInput />}
        {isOpenFormFiled('cvc') && (
          <CardCVCInput goNextFormStep={goNextFormStep} />
        )}
        {isOpenFormFiled('userName') && (
          <CardUserNameInput goNextFormStep={goNextFormStep} />
        )}
        {isOpenFormFiled('period') && (
          <CardExpirationPeriodInput goNextFormStep={goNextFormStep} />
        )}
        {isOpenFormFiled('company') && (
          <CardCompanySelect goNextFormStep={goNextFormStep} />
        )}
        {isOpenFormFiled('numbers') && (
          <CardNumbersInput goNextFormStep={goNextFormStep} />
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
