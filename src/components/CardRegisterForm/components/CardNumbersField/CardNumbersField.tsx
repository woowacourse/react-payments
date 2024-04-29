import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import Input from "@/components/_common/Input/Input";
import { INPUT_COUNTS, VALID_LENGTH } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import useInputRefs from "@/hooks/useInputRefs";
import { isErrorInInputs } from "@/utils/view";
import React, { useMemo, useState } from "react";
import InputFieldMemo from "@/components/_common/InputField/InputField";

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
  const { onChange, errors, values } = cardNumbersState;

  const [isErrorShow, setIsErrorShow] = useState(isErrorInInputs(errors));
  const hasCurrentError = !!Object.keys(errors).length;

  const cardNumbersStateMemo = useMemo(
    () => ({ values, errors, onChange }),
    [values, errors, onChange]
  );

  const {
    values: cardNumbersValues,
    errors: cardNumbersErrors,
    onChange: onChangeCardNumbers,
  } = cardNumbersStateMemo;

  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChangeCardNumbers
  );

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputFieldMemo
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={["카드 번호는 4자리 정수로 입력하셔야 합니다."]}
        isErrorShow={hasCurrentError && isErrorShow}
      >
        {Object.values(cardNumbersValues).map((_: string, index: number) => (
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
            isError={
              !!cardNumbersErrors[`cardNumbers${index + 1}` as CardNumberKeys]
            }
            onBlur={() =>
              setIsErrorShow(isErrorInInputs(errors) && hasCurrentError)
            }
            value={values[`cardNumbers${index + 1}` as CardNumberKeys]}
          />
        ))}
      </InputFieldMemo>
    </S.InputFieldWithInfo>
  );
};

const CardNumbersFieldMemo = React.memo(CardNumbersField);
export default CardNumbersFieldMemo;

// const arePropsEqual = (prevProps: Props, nextProps: Props) => {
//   return (
//     prevProps.cardNumbersState.values === nextProps.cardNumbersState.values &&
//     prevProps.cardNumbersState.errors === nextProps.cardNumbersState.errors
//   );
// };
