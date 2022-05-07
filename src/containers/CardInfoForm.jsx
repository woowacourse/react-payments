import React from "react";
import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  Form,
} from "../components";
import Button from "../components/UIComponents/Button/Button";

export default function CardInfoForm({
  handleFormSubmit,
  isCompleteCardInfo,
  isValidCardInfo,
  setFormValidity,
}) {
  return (
    <Form
      onSubmit={handleFormSubmit}
      isComplete={isCompleteCardInfo}
      setFormValidity={setFormValidity}
    >
      <CardNumberInput />
      <CardExpireDateInput />
      <CardHolderNameInput />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      {isValidCardInfo && <Button data-testid={"next-button"}>다음</Button>}
    </Form>
  );
}
