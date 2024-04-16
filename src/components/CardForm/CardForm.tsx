import { ChangeEvent, useEffect } from "react";
import useInput from "../../hooks/useInput";
import { INPUT_COUNTS, PLACE_HOLDER } from "../../constants/condition";

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
    input: owner,
    onChange: onChangeOwner,
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
        <input
          key={index}
          placeholder={PLACE_HOLDER.CARD_NUMBERS}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeCardNumbers(e, index);
          }}
        />
      ))}

      {expirationPeriod.map((number, index) => (
        <input
          key={index}
          placeholder={expirationPlaceholder[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChangeExpirationPeriod(e, index);
          }}
        />
      ))}

      <input
        placeholder={PLACE_HOLDER.OWNER}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChangeOwner(e, 0);
        }}
      />
    </>
  );
};

export default CardForm;
