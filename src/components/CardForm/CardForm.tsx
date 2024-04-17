import { ChangeEvent } from "react";
import useInput from "../../hooks/useInput";
import { INPUT_COUNTS, PLACE_HOLDER } from "../../constants/condition";
import InputField from "../InputField/InputField";
import Input from "../Input/Input";

const CardForm = () => {
  const {
    input: cardNumbers,
    onChange: onChangeCardNumbers,
    errorMessage: cardNumbersErrorMessage,
  } = useInput({
    initialValue: Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }, () => ""),
  });

  const {
    input: expirationPeriod,
    onChange: onChangeExpirationPeriod,
    errorMessage: expirationPeriodErrorMessage,
  } = useInput({
    initialValue: Array.from(
      { length: INPUT_COUNTS.EXPIRATION_PERIOD },
      () => ""
    ),
  });

  const { onChange: onChangeOwnerName, errorMessage: ownerErrorMessage } =
    useInput({
      initialValue: [""],
    });

  const expirationPlaceholder = [
    PLACE_HOLDER.EXPIRATION_MONTH,
    PLACE_HOLDER.EXPIRATION_YEAR,
  ];

  return (
    <>
      <InputField label="카드번호" errorMessage={cardNumbersErrorMessage}>
        {cardNumbers.map((_, index) => (
          <Input
            key={index}
            placeholder={PLACE_HOLDER.CARD_NUMBERS}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChangeCardNumbers(e, index);
            }}
            isError={false}
          />
        ))}
      </InputField>

      <InputField label="유효기간" errorMessage={expirationPeriodErrorMessage}>
        {expirationPeriod.map((_, index) => (
          <Input
            key={index}
            placeholder={expirationPlaceholder[index]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChangeExpirationPeriod(e, index);
            }}
            isError={false}
          />
        ))}
      </InputField>

      <InputField
        label="소유자이름"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeOwnerName(e, 0);
        }}
        errorMessage={ownerErrorMessage}
      >
        <Input placeholder={PLACE_HOLDER.OWNER_NAME} isError={false} />
      </InputField>
    </>
  );
};

export default CardForm;
