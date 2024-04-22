import { ChangeEvent, FocusEvent, memo } from "react";
import Input from "../common/Input/Input";
import Field from "../layout/Field/Field";
import { ADD_CARD_FORM_FIELDS } from "../../constants/messages";
const { EXPIRATION_DATE } = ADD_CARD_FORM_FIELDS;

interface ExpirationDateInputProps {
  expirationDate: {
    data: Record<string, { value: string; isError: boolean }>;
    status: { isError: boolean; errorMessage: string };
  };
  changeExpirationDate: (event: ChangeEvent<HTMLInputElement>) => void;
  blurExpirationDate: (event: FocusEvent<HTMLInputElement>) => void;
}

const ExpirationDateInput = memo(
  ({
    expirationDate,
    changeExpirationDate,
    blurExpirationDate,
  }: ExpirationDateInputProps) => {
    return (
      <Field
        title={EXPIRATION_DATE.title}
        description={EXPIRATION_DATE.description}
        labelText={EXPIRATION_DATE.labelText}
        errorMessage={expirationDate.status.errorMessage}
      >
        {Object.entries(expirationDate.data).map(
          ([name, { value, isError }]) => (
            <Input
              key={name}
              name={name as keyof ExpirationDate}
              placeholder={
                name === "month"
                  ? EXPIRATION_DATE.placeholder.month
                  : EXPIRATION_DATE.placeholder.year
              }
              value={value}
              isError={isError}
              onChange={changeExpirationDate}
              onBlur={blurExpirationDate}
              maxLength={2}
            ></Input>
          )
        )}
      </Field>
    );
  }
);

export default ExpirationDateInput;
