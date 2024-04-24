import React, {
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  useId,
  useMemo,
  useState,
} from 'react';

import {
  CARD_COMPANY,
  CARD_COMPANY_MESSAGE,
  CARD_FORM_STEP,
  ERROR_MESSAGE,
} from '../../constants';
import useFocusRef from '../../hooks/useFocusRef';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';

import styles from './style.module.css';

const PLACE_HOLDER = 'place_holder';
export interface CardCompanySelectProps {
  editCardCompany: (companyName: string) => void;
  goNextFormStep: (currentStep: number) => void;
}
const BLACK_COLOR_STYLE: CSSProperties = { color: 'inherit' };

function CardCompanySelect(props: CardCompanySelectProps) {
  const { editCardCompany, goNextFormStep } = props;
  const [error, setError] = useState(false);
  // 옵션 선택, select focus,blur 여부에 따라 select의 color를 변경하기 위한 상태
  const [selectColorStyle, setSelectColorStyle] = useState<CSSProperties>();
  const { focusTargetRef } = useFocusRef<HTMLSelectElement>();
  const selectClassName = useMemo(
    () => `${styles.select} ${error ? styles.error : ''}`,
    [error],
  );
  const selectId = `card-company-select-${useId()}`;

  const isSelectedCompany = (option: string) => option !== PLACE_HOLDER;

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    // 오류 업데이트
    setError(false);
    // cardInfo 변경
    editCardCompany(value);
    // 다음 입력 필드로 이동
    goNextFormStep(CARD_FORM_STEP.company);
  };

  const handleBlur = (event: FocusEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    // 옵션 선택하지 않았을 시 오류와 스타일 처리
    const isError = !isSelectedCompany(value);
    setError(isError);
    // case1. 선택된 option이 PLACE_HOLDER => css의 스타일이 적용됨
    // case2. 유효한 카드사 선택 => 기존에 사용되는 글자 색상이 적용됨
    setSelectColorStyle(isError ? undefined : BLACK_COLOR_STYLE);
  };

  const handleFocus = () => {
    setSelectColorStyle(BLACK_COLOR_STYLE);
  };

  return (
    <CardInputSection
      title={CARD_COMPANY_MESSAGE.title}
      subTitle={CARD_COMPANY_MESSAGE.subTitle}
    >
      <label className="scr-only" htmlFor={selectId}>
        {CARD_COMPANY_MESSAGE.label}
      </label>
      <select
        ref={focusTargetRef}
        id={selectId}
        className={selectClassName}
        style={selectColorStyle}
        onChange={handleSelectChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <option
          className={styles.selectPlaceholder}
          value={PLACE_HOLDER}
          disabled
          selected
        >
          {CARD_COMPANY_MESSAGE.placeholder}
        </option>
        {Array.from(CARD_COMPANY).map(([key, value]) => (
          <option key={`option-${key}`} value={key}>
            {value.name}
          </option>
        ))}
      </select>
      <ErrorMessage>
        <p>{error ? ERROR_MESSAGE.company : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardCompanySelect;
