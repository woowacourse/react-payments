import { ChangeEvent, RefObject, memo } from "react";
import Input from "../common/Input/Input";
import Field from "../layout/Field/Field";
import { ADD_CARD_FORM_FIELDS } from "../../constants/messages";
const { EXPIRATION_DATE } = ADD_CARD_FORM_FIELDS;

interface ExpirationDateInputProps {
  expirationDate: Record<string, { value: string; isError: boolean }>;
  errorMessage: string;
  changeExpirationDate: (event: ChangeEvent<HTMLInputElement>) => void;
  refs: {
    monthRef: RefObject<HTMLInputElement>;
    yearRef: RefObject<HTMLInputElement>;
  };
}

const ExpirationDateInput = memo(
  ({
    expirationDate,
    changeExpirationDate,
    refs,
    errorMessage,
  }: ExpirationDateInputProps) => {
    return (
      <Field
        title={EXPIRATION_DATE.title}
        description={EXPIRATION_DATE.description}
        labelText={EXPIRATION_DATE.labelText}
        errorMessage={errorMessage}
      >
        {Object.entries(expirationDate).map(
          ([name, { value, isError }], index) => (
            <Input
              key={name}
              name={name}
              placeholder={
                name === "month"
                  ? EXPIRATION_DATE.placeholder.month
                  : EXPIRATION_DATE.placeholder.year
              }
              value={value}
              isError={isError}
              inputRef={Object.values(refs)[index]}
              onChange={changeExpirationDate}
              maxLength={2}
              autoFocus={index === 0}
            />
          )
        )}
      </Field>
    );
  }
);

export default ExpirationDateInput;
