import SelectBox from "../../../../../../components/common/selectForm/SelectBox";
import { TCardBrand } from "../../cardPreview/constants/DisplayData";
import CARD from "./constants/Card";

const CardBrandSelect = ({ setCardInfo, setValidState }) => {
  function onSelectHandler(value: TCardBrand) {
    setCardInfo((prev) => {
      return { ...prev, brandName: value };
    });
    if (value !== "") {
      setValidState((prev) => {
        return { ...prev, cardBrandSelect: true };
      });
    }
  }

  return (
    <SelectBox
      onSelectHandler={(value) => onSelectHandler(value)}
      title="카드사를 선택해주세요"
      description="현재 국내 카드사만 가능합니다."
      placeholder="카드를 선택해주세요"
      options={CARD.BRAND}
    />
  );
};

export default CardBrandSelect;
