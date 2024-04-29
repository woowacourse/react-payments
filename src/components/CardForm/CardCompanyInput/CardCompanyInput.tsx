import TitleContainer from '../../common/TitleContainer/TitleContainer';
import SelectBox from '../../common/SelectBox/SelectBox';

import type { InputType } from '../../../hooks/useInput';
import { CARD_COMPANY } from '../../../constants/Condition';

interface CardCompanyInputProps {
  company: InputType<string>;
}

const CardCompanyInput = ({ company }: CardCompanyInputProps) => {
  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요." subTitle="현재 국내 카드사만 가능합니다." />
      <SelectBox
        options={Object.keys(CARD_COMPANY)}
        selectedOption={company.value}
        placeholder="카드사를 선택해 주세요"
        updateOption={(option: string) => company.handleValue(option)}
      />
    </div>
  );
};

export default CardCompanyInput;
