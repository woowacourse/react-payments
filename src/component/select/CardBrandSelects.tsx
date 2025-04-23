import FormField from "../FormField";
import CardSelect from "./CardSelect";
import cardBrands from "../../constants/cardBrands";

const CardBrandSelects = () => {
  return (
    <FormField label="카드브랜드" id="card-brand" errorMessage="">
      <CardSelect
        defaultMessage="카드사를 선택해 주세요"
        options={cardBrands}
      />
    </FormField>
  );
};

export default CardBrandSelects;
