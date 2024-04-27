import React from "react";

import useCardAddFormField from "../../hooks/useCardAddFormField";

import Input from "../common/Input";
import FormField from "../FormField";

import {
  CARD_FORM_ATTRIBUTES,
  VALIDATION_MESSAGES,
} from "../../constants/card-app";

import { validateCVCNumberInputCompleted } from "../../validators/cardAddFormValidator";

const CVCNumberInputField = () => {
  const { formFieldState, isValidFormField, dispatch } =
    useCardAddFormField("cvcNumber");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const isNumericInput = /^(\d*)$/.test(value);

    dispatch({
      type: "SET_ERROR",
      field: "cvcNumber",
      subField: name,
      isValid: !isNumericInput,
    });

    if (!isNumericInput) return;

    dispatch({
      type: "SET_CVC_NUMBER",
      value: value,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isCVCNumberInputCompleted = validateCVCNumberInputCompleted(
      formFieldState.value
    );

    if (event.key !== "Enter" || !isCVCNumberInputCompleted) return;

    dispatch({
      type: "SET_DISPLAY",
      field: "cardPassword",
    });
  };

  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["cvcNumber"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="cvc-number" labelText={labelText} />
      <FormField.InputContent>
        <Input
          id="cvc-number"
          type="text"
          placeholder="123"
          name="cvcNumber"
          value={formFieldState.value.cvcNumber}
          maxLength={3}
          autoFocus
          onKeyDown={handleKeyDown}
          inputSize="large"
          isError={formFieldState.errorState.cvcNumber}
          onChange={(event) => handleInputChange(event)}
        />
      </FormField.InputContent>
      {isValidFormField ? (
        <FormField.InfoText
          textType="caption"
          text="CVC 입력이 완료되면 엔터를 눌러주세요"
        />
      ) : (
        <FormField.InfoText
          textType="error"
          text={isValidFormField ? "" : VALIDATION_MESSAGES.invalidCVCNumber}
        />
      )}
    </FormField>
  );
};

export default CVCNumberInputField;
