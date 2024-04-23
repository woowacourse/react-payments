import InputFieldHeader from "@/components/InputFieldHeader/InputFieldHeader";
import S from "../../style";
import { MESSAGE } from "@/constants/message";
import InputField from "@/components/InputField/InputField";
import Input from "@/components/Input/Input";
import { INPUT_COUNTS } from "@/constants/condition";
import useInputs from "@/hooks/useInputs";
import { CardNumberInputType } from "@/pages/CardRegisterPage/CardRegisterPage";
import useShowError from "@/hooks/useShowError";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
}

type CardNumberKeys = keyof CardNumberInputType;

const CardNumbersField = ({ cardNumbersState }: Props) => {
  const { onChange, errors } = cardNumbersState;
  const { showErrors, onBlurShowErrors, onFocusHideErrors } = useShowError();

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
              type="number"
              key={index}
              name={`cardNumbers${index + 1}`}
              maxLength={4}
              placeholder={MESSAGE.PLACEHOLDER.CARD_NUMBERS}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
                onChange(e);
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
