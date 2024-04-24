import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import SelectBox from "@/components/SelectBox/SelectBox";
import useInput from "@/hooks/useInput";
import { CardType, CardTypeColor } from "@/constants/cardType";

interface Props {
  cardTypeState: ReturnType<typeof useInput<CardType | null>>;
}
const CardTypeSelectField = ({ cardTypeState }: Props) => {
  const { value, setValue } = cardTypeState;

  const CardTypeNames = [...(Object.keys(CardTypeColor) as CardType[]), null];

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_TYPE}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_TYPE}
      />
      <InputField errorMessages={[]}>
        <SelectBox<CardType>
          optionArr={CardTypeNames}
          value={value}
          setValue={setValue}
        />
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardTypeSelectField;
