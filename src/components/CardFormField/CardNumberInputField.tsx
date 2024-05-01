import React, { useRef } from "react";

import useCardAddFormField from "../../hooks/useCardAddFormField";
import useFocusChain from "../../hooks/useFocusChain";

import Input from "../common/Input";
import FormField from "../FormField";

import { CARD_FORM_ATTRIBUTES, INPUT_RULES } from "../../constants/card-app";
import { VALIDATION_MESSAGES } from "../../constants/card-app";

import cardInputValidator from "../../validators/cardInputValidator";

import { CardNumberKeys } from "../../types/card";

const CardNumberInputField = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const cardNumberInputRefs = [
    firstInputRef,
    secondInputRef,
    thirdInputRef,
    fourthInputRef,
  ];

  const { formFieldState, isValidFormField, handleFormFieldFocus, dispatch } =
    useCardAddFormField("cardNumbers");
  const { setFocusNext } = useFocusChain(cardNumberInputRefs);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const isNumericInput = cardInputValidator.validateNumericInput(value);
    const isValidCardNumberLength =
      cardInputValidator.validateCardNumberLength(value);

    dispatch({
      type: "SET_ERROR_WITH_SUBFIELD",
      field: "cardNumbers",
      subField: name,
      isValid: !isNumericInput || !isValidCardNumberLength,
    });

    if (!isNumericInput) return;

    dispatch({
      type: "SET_CARD_NUMBERS",
      subfield: name,
      value: value,
    });

    if (isValidCardNumberLength) {
      setFocusNext();
    }
  };

  const { query, labelText, caption } = CARD_FORM_ATTRIBUTES["cardNumbers"];
  const { value, errorState } = formFieldState;

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.Label htmlFor="card-number" labelText={labelText} />
      <FormField.InputContent>
        {Object.keys(value).map((key, index) => (
          <Input
            ref={cardNumberInputRefs[index]}
            key={index}
            id={index === 0 ? "card-number" : ""}
            type="text"
            placeholder="1234"
            name={key}
            value={value[key as CardNumberKeys]}
            maxLength={INPUT_RULES.maxCardNumberPartLength}
            autoFocus={index === 0}
            onFocus={handleFormFieldFocus}
            inputSize="small"
            isError={errorState[key as CardNumberKeys]}
            onChange={(e) => handleInputChange(e)}
          />
        ))}
      </FormField.InputContent>
      <FormField.InfoText
        textType="error"
        text={isValidFormField ? "" : VALIDATION_MESSAGES.onlyNumbersAllowed}
      />
    </FormField>
  );
};

export default CardNumberInputField;
