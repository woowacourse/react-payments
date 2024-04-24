import TitleContainer from '../common/TitleContainer/TitleContainer';
import InputField from '../common/InputField/InputField';
import SelectBox from '../common/SelectBox/SelectBox';

import { CARD_BRANDS } from '../../constants/conditions';

interface CardBrandInputProps {
  isBrandValid: { isValid: boolean; errorMessage: string };
  onChangeBrand: (value: string) => void;
}

export default function CardBrandInput({ isBrandValid, onChangeBrand }: CardBrandInputProps) {
  const handleChangeBrand = (value: string) => {
    const cardBrands = Object.values(CARD_BRANDS);
    if (!cardBrands.includes(value as (typeof cardBrands)[number])) {
      return;
    }
    onChangeBrand(value);
  };

  return (
    <div>
      <TitleContainer title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다." />
      <InputField errorMessage={isBrandValid.errorMessage}>
        <SelectBox
          optionValues={Object.values(CARD_BRANDS) as string[]}
          isValid={isBrandValid.isValid}
          placeholder={'카드사를 선택해주세요.'}
          onChange={handleChangeBrand}
        />
      </InputField>
    </div>
  );
}
