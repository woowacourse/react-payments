import React from "react";

import useCardAddFormField from "../../hooks/useCardAddFormField";

import FormField from "../FormField";
import Select from "../Select";

import {
  CARD_COMPANIES,
  CARD_FORM_ATTRIBUTES,
  CardCompany,
  VALIDATION_MESSAGES,
} from "../../constants/card-app";

import { isArrayElement } from "../../utils/type-guard";

const CardCompanySelectField = () => {
  const { isValidFormField, handleFormFieldFocus, dispatch } =
    useCardAddFormField("cardCompany");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    if (!isArrayElement<CardCompany>(CARD_COMPANIES, value)) return;

    dispatch({
      type: "SET_CARD_COMPANY",
      value: value,
    });
  };

  const { query, caption } = CARD_FORM_ATTRIBUTES["cardCompany"];

  return (
    <FormField>
      <FormField.InputTitle text={query} />
      <FormField.InfoText textType="caption" text={caption} />
      <FormField.InputContent>
        <Select
          autoFocus
          onFocus={handleFormFieldFocus}
          options={CARD_COMPANIES}
          placeholder="카드사를 선택해 주세요"
          onSelect={handleSelectChange}
        />
      </FormField.InputContent>
      <FormField.InfoText
        textType="error"
        text={isValidFormField ? "" : VALIDATION_MESSAGES.invalidOwnerName}
      />
    </FormField>
  );
};

export default CardCompanySelectField;
