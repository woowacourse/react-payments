import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import SelectBox from "@/components/SelectBox/SelectBox";

const CardTypeSelectField = () => {
  enum CardType {
    "BC카드" = "#F04651",
    "신한카드" = "#0046FF",
    "카카오뱅크" = "#FFE600",
    "현대카드" = "#000000",
    "우리카드" = "#007BC8",
    "롯데카드" = "#ED1C24",
    "하나카드" = "#009490",
    "국민카드" = "#6A6056",
  }

  const CardTypeNames = Object.keys(CardType);

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_TYPE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_TYPE}
      />
      <InputField label={MESSAGE.INPUT_LABEL.CARD_NUMBERS} errorMessages={[]}>
        <SelectBox optionArr={CardTypeNames} />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardTypeSelectField;
