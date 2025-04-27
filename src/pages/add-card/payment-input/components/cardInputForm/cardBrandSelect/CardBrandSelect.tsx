import SelectBox from "../../../../../../components/common/selectForm/SelectBox";
import { TCardBrand } from "../../cardPreview/constants/DisplayData";
import CARD from "../constants/Card";

interface CardBrandSelectProps {
  handleBrandNameChange: (brnad: TCardBrand) => void;
  onSuccessValidate: (isValid: boolean) => void;
  onSuccessNextInput: () => void;
}

const CardBrandSelect = ({
  handleBrandNameChange,
  onSuccessValidate,
  onSuccessNextInput,
}: CardBrandSelectProps) => {
  function onSelectHandler(value: TCardBrand) {
    handleBrandNameChange(value);
    if (value) {
      onSuccessValidate(true);
      onSuccessNextInput();
    }
  }

  return (
    <SelectBox<TCardBrand>
      onSelectHandler={(value) => onSelectHandler(value)}
      title="카드사를 선택해주세요"
      description="현재 국내 카드사만 가능합니다."
      placeholder="카드를 선택해주세요"
      options={CARD.BRAND}
      autoFocus={true}
    />
  );
};

export default CardBrandSelect;
