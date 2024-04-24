import Input from "../common/Input/Input";
import Field from "../layout/Field/Field";
import { ADD_CARD_FORM_FIELDS } from "@/constants/messages";
import { ChangeEvent, FocusEvent, RefObject, memo } from "react";
const { CARD_NUMBER } = ADD_CARD_FORM_FIELDS;

interface CardNumberInputProps {
  cardNumbers: {
    data: Record<string, { value: string; isError: boolean }>;
    status: { isError: boolean; errorMessage: string };
  };
  changeCardNumbers: (event: ChangeEvent<HTMLInputElement>) => void;
  blurCardNumbers: (event: FocusEvent<HTMLInputElement>) => void;
  refs: {
    firstRef: RefObject<HTMLInputElement>;
    secondRef: RefObject<HTMLInputElement>;
    thirdRef: RefObject<HTMLInputElement>;
    fourthRef: RefObject<HTMLInputElement>;
  };
}

const CardNumberInput = memo(
  ({
    cardNumbers,
    changeCardNumbers,
    blurCardNumbers,
    refs,
  }: CardNumberInputProps) => {
    return (
      <Field
        title={CARD_NUMBER.title}
        description={CARD_NUMBER.description}
        labelText={CARD_NUMBER.labelText}
        errorMessage={cardNumbers.status.errorMessage}
      >
        {Object.entries(cardNumbers.data).map(
          ([name, { value, isError }], index) => (
            <Input
              key={name}
              name={name}
              placeholder={CARD_NUMBER.placeholder}
              value={value}
              isError={isError}
              inputRef={Object.values(refs)[index]}
              onChange={changeCardNumbers}
              onBlur={blurCardNumbers}
              maxLength={4}
              autoFocus={index === 0}
            />
          )
        )}
      </Field>
    );
  }
);

export default CardNumberInput;
