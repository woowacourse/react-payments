import React from "react";

import useCardAddFormField from "../../hooks/useCardAddFormField";

import Input from "../common/Input";
import FormField from "../FormField";

import {
  CARD_FORM_ATTRIBUTES,
  VALIDATION_MESSAGES,
} from "../../constants/card-app";

import { validateCVCNumberInputCompleted } from "../../validators/cardAddFormValidator";
import cardInputValidator from "../../validators/cardInputValidator";

const CVCNumberInputField = () => {
  const { formFieldState, dispatch } = useCardAddFormField("cvcNumber");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const isNumericInput = cardInputValidator.validateNumericInput(value);

    dispatch({
      type: "SET_ERROR_WITHOUT_SUBFIELD",
      field: "cvcNumber",
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
          value={formFieldState.value}
          maxLength={3}
          autoFocus
          onKeyDown={handleKeyDown}
          inputSize="large"
          isError={formFieldState.errorState}
          onChange={(event) => handleInputChange(event)}
        />
      </FormField.InputContent>
      {formFieldState.errorState ? (
        <FormField.InfoText
          textType="error"
          text={VALIDATION_MESSAGES.invalidCVCNumber}
        />
      ) : (
        <FormField.InfoText
          textType="caption"
          text="CVC 입력이 완료되면 엔터를 눌러주세요"
        />
      )}
    </FormField>
  );
};

export default CVCNumberInputField;
