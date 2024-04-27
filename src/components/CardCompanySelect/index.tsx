import { ChangeEvent, FocusEvent, useContext, useState } from 'react';

import {
  CARD_COMPANY,
  CARD_COMPANY_MESSAGE,
  CardStep,
  ERROR_MESSAGE,
} from '../../constants';
import CardFormContext from '../../contexts/CardFormContext';
import { useNextFormStep } from '../../hooks';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Select from '../Select';

const PLACE_HOLDER = 'place_holder';
export interface CardCompanySelectProps {
  goNextFormStep: (currentStep: CardStep) => void;
}

function CardCompanySelect(props: CardCompanySelectProps) {
  const { goNextFormStep } = props;

  const cardFormContext = useContext(CardFormContext);
  const [error, setError] = useState(false);
  const { nextFormStep } = useNextFormStep({ currentCardStep: 'company' });

  const isSelectedCompany = (option: string) => option !== PLACE_HOLDER;

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!cardFormContext) return;
    const { value } = event.target;
    // 오류 업데이트
    setError(false);
    // cardInfo 변경
    cardFormContext.editCardCompany(value);
    // 다음 입력 필드로 이동
    if (!nextFormStep) return;
    goNextFormStep(nextFormStep);
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
