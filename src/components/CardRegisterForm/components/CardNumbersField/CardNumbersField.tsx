import InputFieldHeader from "@/components/_common/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import Input from "@/components/_common/Input/Input";
import { INPUT_COUNTS, VALID_LENGTH } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import useInputRefs from "@/hooks/useInputRefs";
import { hasInactiveInputError } from "@/utils/view";
import React, { useState } from "react";
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
  const { onChange, errors, values, isValidated } = cardNumbersState;
  const [isErrorShow, setIsErrorShow] = useState(
    !isValidated && hasInactiveInputError(errors)
  );

  const { inputRefs, onFocusNextInput } = useInputRefs(
    INPUT_COUNTS.CARD_NUMBERS,
    onChange
  );

  const getCardNumbersKey = (index: number): CardNumberKeys => {
    return `cardNumbers${index + 1}` as CardNumberKeys;
  };

  return (
    <S.InputFieldWithInfo>
      <InputFieldHeader
        title={MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS}
        subTitle={MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS}
      />
      <InputFieldMemo
        label={MESSAGE.INPUT_LABEL.CARD_NUMBERS}
        errorMessages={["카드 번호는 4자리 정수로 입력하셔야 합니다."]}
        isErrorShow={isErrorShow}
      >
        {Object.values(values).map((_: string, index: number) => {
          const currentInputName = getCardNumbersKey(index);
          const currentInputIsError = !!errors[currentInputName];

          return (
            <Input
              value={values[currentInputName]}
              autoFocus={index === 0}
              ref={(el) => (inputRefs.current[index] = el)}
              type="number"
              key={index}
              maxLength={VALID_LENGTH.CARD_NUMBERS}
              name={currentInputName}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              isError={currentInputIsError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onFocusNextInput(e, index);
              }}
              onBlur={() => {
                setIsErrorShow(!isValidated && hasInactiveInputError(errors));
              }}
            />
          );
        })}
      </InputFieldMemo>
    </S.InputFieldWithInfo>
  );
};

const arePropsEqual = (prevProps: Props, nextProps: Props) => {
  return (
    prevProps.cardNumbersState.values === nextProps.cardNumbersState.values &&
    prevProps.cardNumbersState.errors === nextProps.cardNumbersState.errors
  );
};

const CardNumbersFieldMemo = React.memo(CardNumbersField, arePropsEqual);
export default CardNumbersFieldMemo;
