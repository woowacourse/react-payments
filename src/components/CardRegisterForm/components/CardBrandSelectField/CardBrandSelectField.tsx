import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import SelectBox from "@/components/_common/SelectBox/SelectBox";
import useInput from "@/hooks/useInput";
import { CardBrandType, CardBrandTypeColor } from "@/constants/cardBrandType";

interface Props {
  cardBrandState: ReturnType<typeof useInput<CardBrandType | null>>;
}

const CardBrandSelectField = ({ cardBrandState }: Props) => {
  const { value, setValue } = cardBrandState;

  const CardTypeNames = [
    ...(Object.keys(CardBrandTypeColor) as CardBrandType[]),
  ];

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_TYPE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_TYPE}
      />
      <InputField errorMessages={[]}>
        <SelectBox<CardBrandType>
          optionArr={CardTypeNames}
          value={value}
          setValue={setValue}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardBrandSelectField;
