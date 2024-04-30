import React from "react";
import useCardAddFormField from "../../hooks/useCardAddFormField";

import Input from "../common/Input";
import FormField from "../FormField";

import { CARD_FORM_ATTRIBUTES, INPUT_RULES } from "../../constants/card-app";
import { VALIDATION_MESSAGES } from "../../constants/card-app";

import { validateCardOwnerInputCompleted } from "../../validators/cardAddFormValidator";
import cardInputValidator from "../../validators/cardInputValidator";

const CardOwnerInputField = () => {
  const { formFieldState, isValidFormField, handleFormFieldFocus, dispatch } =
    useCardAddFormField("ownerName");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const isAlphabetInput = cardInputValidator.validateAlphabetInput(value);
    const isValidOwnerName = cardInputValidator.validateNumberInRange(
      value.length,
      INPUT_RULES.minCardOwnerNameLength,
      INPUT_RULES.maxCardOwnerNameLength
    );

    dispatch({
      type: "SET_ERROR_WITH_SUBFIELD",
      field: "ownerName",
      subField: name,
      isValid: !isAlphabetInput || !isValidOwnerName,
    });

    if (!isAlphabetInput) return;

    dispatch({
      type: "SET_OWNER_NAME",
      value: value.toUpperCase(),
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isCardOwnerInputCompleted = validateCardOwnerInputCompleted(
      formFieldState.value
    );

    if (event.key !== "Enter" || !isCardOwnerInputCompleted) return;

    dispatch({
      type: "SET_DISPLAY",
      field: "cvcNumber",
    });
  };

  const { value, errorState } = formFieldState;
  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["ownerName"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="expiration-date" labelText={labelText} />
      <FormField.InputContent>
        <Input
          id="card-owner"
          type="text"
          placeholder="JOHN DOE"
          name="ownerName"
          value={value.ownerName}
          inputSize="large"
          autoFocus
          onFocus={handleFormFieldFocus}
          onKeyDown={handleKeyDown}
          isError={errorState.ownerName}
          onChange={(event) => {
            handleInputChange(event);
          }}
        />
      </FormField.InputContent>
      {isValidFormField ? (
        <FormField.InfoText
          textType="caption"
          text="이름 입력이 완료되면 엔터를 눌러주세요"
        />
      ) : (
        <FormField.InfoText
          textType="error"
          text={isValidFormField ? "" : VALIDATION_MESSAGES.invalidOwnerName}
        />
      )}
    </FormField>
  );
};

export default CardOwnerInputField;
