import React from "react";

import useCardAddFormField from "../../hooks/useCardAddFormField";

import Input from "../common/Input";
import FormField from "../FormField";

import {
  CARD_FORM_ATTRIBUTES,
  VALIDATION_MESSAGES,
} from "../../constants/card-app";
import cardInputValidator from "../../validators/cardInputValidator";

const CardPasswordInputField = () => {
  const { formFieldState, dispatch } = useCardAddFormField("cardPassword");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const isNumericInput = cardInputValidator.validateNumericInput(value);

    dispatch({
      type: "SET_ERROR_WITHOUT_SUBFIELD",
      field: "cardPassword",
      isValid: !isNumericInput,
    });

    if (!isNumericInput) return;

    dispatch({
      type: "SET_PASSWORD",
      value: value,
    });
  };

  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["cardPassword"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="card-password" labelText={labelText} />
      <FormField.InputContent>
        <Input
          id="card-password"
          type="password"
          placeholder="**"
          name="cardPassword"
          value={formFieldState.value}
          maxLength={2}
          autoFocus
          inputSize="large"
          isError={formFieldState.errorState}
          onChange={(event) => handleInputChange(event)}
        />
      </FormField.InputContent>
      <FormField.InfoText
        textType="error"
        text={
          formFieldState.errorState
            ? VALIDATION_MESSAGES.invalidCardPassword
            : ""
        }
      />
    </FormField>
  );
};

export default CardPasswordInputField;
