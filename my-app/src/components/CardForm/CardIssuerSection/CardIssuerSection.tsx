import CommonSection from '../../../common/CommonSection/CommonSection';
import type { SelectedCardIssuerCode } from '../../../constants/cardIssuer';
import useInitialFocus from '../../../hooks/useInitialFocus';
import SelectInput from './CardIssuerSelect/CardIssuerSelect';

interface Props {
  value: SelectedCardIssuerCode;
  updateValue: (selectValue: SelectedCardIssuerCode) => void;
}

function CardIssuerSection({ value, updateValue }: Props) {
  const selectRef = useInitialFocus<HTMLSelectElement>();

  function handleOnChange(selectValue: SelectedCardIssuerCode): void {
    updateValue(selectValue);
  }

  return (
    <CommonSection
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다"
    >
      <SelectInput
        inputRef={selectRef}
        value={value}
        onChange={handleOnChange}
      />
    </CommonSection>
  );
}

export default CardIssuerSection;
