import { useRef } from "react";

import Input from "../common/Input";
import FormField from "../FormField";

import { CARD_FORM_ATTRIBUTES } from "../../constants/card-app";
import { VALIDATION_MESSAGES } from "../../constants/card-app";

import cardInputValidator from "../../validators/cardInputValidator";
import useCardAddFormField from "../../hooks/useCardAddFormField";
import useFocusChain from "../../hooks/useFocusChain";

const ExpirationDateInputField = () => {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const expirationDateRefs = [monthRef, yearRef];

  const { formFieldState, isValidFormField, handleFormFieldFocus, dispatch } =
    useCardAddFormField("expirationDate");
  const { setFocusNext } = useFocusChain(expirationDateRefs);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!monthRef.current || !yearRef.current) return;

    const { name, value } = event.target;

    const isNumericInput = /^(\d*)$/.test(value);
    const isValidDate = cardInputValidator.validateExpiration({
      mm: monthRef.current.value,
      yy: yearRef.current.value,
      name,
    });

    dispatch({
      type: "SET_ERROR",
      field: "expirationDate",
      subField: name,
      isValid: !isNumericInput || !isValidDate,
    });

    if (!isNumericInput) return;

    dispatch({
      type: "SET_EXPIRATION_DATE",
      subfield: name,
      value: value,
    });

    if (value.length === 2) {
      setFocusNext();
    }
  };

  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["expirationDate"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="expiration-date" labelText={labelText} />
      <FormField.InputContent>
        <Input
          ref={monthRef}
          id="expiration-date"
          type="text"
          placeholder="MM"
          name="mm"
          value={formFieldState.value.mm}
          maxLength={2}
          autoFocus
          onFocus={handleFormFieldFocus}
          inputSize="medium"
          isError={formFieldState.errorState.mm}
          onChange={(event) => handleInputChange(event)}
        />
        <Input
          ref={yearRef}
          type="text"
          placeholder="YY"
          name="yy"
          value={formFieldState.value.yy}
          maxLength={2}
          inputSize="medium"
          isError={formFieldState.errorState.yy}
          onChange={(event) => handleInputChange(event)}
        />
      </FormField.InputContent>
      <FormField.InfoText
        textType="error"
        text={isValidFormField ? "" : VALIDATION_MESSAGES.invalidDate}
      />
    </FormField>
  );
};

export default ExpirationDateInputField;
