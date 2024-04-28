import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import { INPUT_COUNTS, VALID_LENGTH } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import useInputRefs from "@/hooks/useInputRefs";
// import { sliceInvalidValueWithRegex, sliceOverMaxLength } from "@/utils/view";
// import { REGEX } from "@/constants/regex";
export type CardNumberInputType = {
  cardNumbers1: string;
  cardNumbers2: string;
  cardNumbers3: string;
  cardNumbers4: string;
};

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
}

type CardNumberKeys = keyof CardNumberInputType;

const CardNumbersField = ({ cardNumbersState }: Props) => {
  const { onChange, errors } = cardNumbersState;

  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputField
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={Object.values(errors)}
      >
        {new Array(INPUT_COUNTS.CARD_NUMBERS)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              autoFocus={index === 0}
              ref={(el) => (inputRefs.current[index] = el)}
              type="number"
              key={index}
              maxLength={VALID_LENGTH.CARD_NUMBERS}
              name={`cardNumbers${index + 1}`}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onFocusNextInput(e, index);
              }}
              isError={!!errors[`cardNumbers${index + 1}` as CardNumberKeys]}
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardNumbersField;
