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

export default function CardInfoForm({ handleFormSubmit, isValidCardInfo }) {
  return (
    <Form onSubmit={handleFormSubmit}>
      <CardNumberInput />
      <CardExpireDateInput />
      <CardHolderNameInput />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      {isValidCardInfo && <Button>다음</Button>}
    </Form>
  );
}
