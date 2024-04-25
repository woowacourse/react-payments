import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/_common/InputField/InputField";
import Input from "@/components/_common/Input/Input";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import useShowError from "@/hooks/useShowError";
import { useRef } from "react";

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
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    new Array(INPUT_COUNTS.CARD_NUMBERS)
  );

  console.log("inputRef", inputRefs);

  const onFocusNextInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log("index", index);
    if (e.target.value.length === e.target.maxLength) {
      onChange(e);
      const nextIndex = index + 1;
      if (nextIndex < INPUT_COUNTS.CARD_NUMBERS) {
        inputRefs.current[nextIndex]?.focus();
      }
    } else {
      onChange(e);
    }
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputField
        showErrors={showErrors}
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={Object.values(errors)}
      >
        {new Array(INPUT_COUNTS.CARD_NUMBERS)
          .fill(0)
          .map((_: string, index: number) => (
            <Input
              ref={(el) => (inputRefs.current[index] = el)}
              type="number"
              key={index}
              name={`cardNumbers${index + 1}`}
              maxLength={4}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                onFocusNextInput(e, index);
              }}
              onBlur={onBlurShowErrors}
              onFocus={onFocusHideErrors}
              isError={!!errors[`cardNumbers${index + 1}` as CardNumberKeys]}
            />
          ))}
      </InputField>
    </S.InputFieldWithInfo>
  );
};

export default CardNumbersField;
