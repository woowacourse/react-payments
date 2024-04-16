import { ChangeEvent } from "react";
import useInput from "../../hooks/useInput";
import { INPUT_COUNTS, PLACE_HOLDER } from "../../constants/condition";
import InputField from "../Input/InputField";

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

  const {
    input: ownerName,
    onChange: onChangeOwnerName,
    errorMessage: ownerErrorMessage,
  } = useInput({
    initialValue: [""],
  });

  const expirationPlaceholder = [
    PLACE_HOLDER.EXPIRATION_MONTH,
    PLACE_HOLDER.EXPIRATION_YEAR,
  ];

  return (
    <>
      {cardNumbers.map((number, index) => (
        <InputField
          key={index}
          placeholder={PLACE_HOLDER.CARD_NUMBERS}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeCardNumbers(e, index);
          }}
          value={number}
          errorMessage={cardNumbersErrorMessage}
        />
      ))}

      {expirationPeriod.map((value, index) => (
        <InputField
          key={index}
          placeholder={expirationPlaceholder[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeExpirationPeriod(e, index);
          }}
          value={value}
          errorMessage={expirationPeriodErrorMessage}
        />
      ))}

      <InputField
        placeholder={PLACE_HOLDER.OWNER_NAME}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeOwnerName(e, 0);
        }}
        value={ownerName[0]}
        errorMessage={ownerErrorMessage}
      />
    </>
  );
};

export default CardForm;
