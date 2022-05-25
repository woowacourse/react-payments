import React from "react";

import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  Form,
} from "components";

import Button from "components/UIComponents/Button/Button";
import { CardInfoStateTypeInterface } from "context/CardInfoContext";

type Props = {
  handleFormSubmit: (formData: CardInfoStateTypeInterface) => void;
  isCompleteCardInfo: boolean;
  isValidCardInfo: boolean;
  setFormValidity: (formInputArray: Node[]) => void;
};

export default function CardInfoForm({
  handleFormSubmit,
  isCompleteCardInfo,
  isValidCardInfo,
  setFormValidity,
}: Props) {
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
