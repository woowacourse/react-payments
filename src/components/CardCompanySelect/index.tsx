import { ChangeEvent, FocusEvent, useState } from 'react';

import {
  CARD_COMPANY,
  CARD_COMPANY_MESSAGE,
  CARD_FORM_STEP,
  ERROR_MESSAGE,
} from '../../constants';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Select from '../Select';

const PLACE_HOLDER = 'place_holder';
export interface CardCompanySelectProps {
  editCardCompany: (companyName: string) => void;
  goNextFormStep: (currentStep: number) => void;
}

function CardCompanySelect(props: CardCompanySelectProps) {
  const { editCardCompany, goNextFormStep } = props;
  const [error, setError] = useState(false);

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
  };

  return (
    <CardInputSection
      title={CARD_COMPANY_MESSAGE.title}
      subTitle={CARD_COMPANY_MESSAGE.subTitle}
    >
      <Select
        error={error}
        label={CARD_COMPANY_MESSAGE.label}
        optionPlaceholder={CARD_COMPANY_MESSAGE.placeholder}
        extraChangeHandler={handleSelectChange}
        onBlur={handleBlur}
      >
        {Array.from(CARD_COMPANY).map(([key, value]) => (
          <option key={`option-${key}`} value={key}>
            {value.name}
          </option>
        ))}
      </Select>
      <ErrorMessage>
        <p>{error ? ERROR_MESSAGE.company : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardCompanySelect;
