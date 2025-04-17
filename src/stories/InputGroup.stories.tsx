import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CardInputProps } from "../types/CardInputTypes";
import InputGroup from "../component/InputGroup";
import Input from "../component/Input";
import {
  validateCardCVC,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardNumber,
} from "../validation/validation";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const renderCardNumberInput = (setCardInput: any, handleErrorMessage: any) => (
  <Input
    maxLength={4}
    placeholder="0000"
    inputKey="first"
    setCardInput={setCardInput}
    validate={validateCardNumber}
    handleErrorMessage={handleErrorMessage}
  />
);

const renderExpiryDateInputs = (setCardInput: any, handleErrorMessage: any) => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Input
      maxLength={2}
      placeholder="MM"
      inputKey="MM"
      setCardInput={setCardInput}
      validate={validateCardExpirationDateMM}
      handleErrorMessage={handleErrorMessage}
    />
    <span style={{ alignSelf: "center" }}>/</span>
    <Input
      maxLength={2}
      placeholder="YY"
      inputKey="YY"
      setCardInput={setCardInput}
      validate={validateCardExpirationDateYY}
      handleErrorMessage={handleErrorMessage}
    />
  </div>
);

const renderCVCInput = (setCardInput: any, handleErrorMessage: any) => (
  <Input
    maxLength={3}
    placeholder="CVC"
    inputKey="CVC"
    setCardInput={setCardInput}
    validate={validateCardCVC}
    handleErrorMessage={handleErrorMessage}
  />
);

export const CardNumberInputGroup: Story = {
  render: () => {
    const [cardInput, setCardInput] = useState<CardInputProps>({
      first: "",
      second: "",
      third: "",
      fourth: "",
      MM: "",
      YY: "",
      CVC: "",
    });
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>(
      {}
    );

    const handleErrorMessage = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        cardNumber: message,
      }));
    };

    return (
      <div style={{ width: "300px" }}>
        <InputGroup
          label="카드번호"
          errorKey="cardNumber"
          errorMessages={errorMessages}
        >
          {renderCardNumberInput(setCardInput, handleErrorMessage)}
        </InputGroup>
      </div>
    );
  },
};

export const ExpiryDateInputGroup: Story = {
  render: () => {
    const [cardInput, setCardInput] = useState<CardInputProps>({
      first: "",
      second: "",
      third: "",
      fourth: "",
      MM: "",
      YY: "",
      CVC: "",
    });
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>(
      {}
    );

    const handleErrorMessage = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        expiryDate: message,
      }));
    };

    return (
      <div style={{ width: "300px" }}>
        <InputGroup
          label="유효기간"
          errorKey="expiryDate"
          errorMessages={errorMessages}
        >
          {renderExpiryDateInputs(setCardInput, handleErrorMessage)}
        </InputGroup>
      </div>
    );
  },
};

export const CVCInputGroup: Story = {
  render: () => {
    const [cardInput, setCardInput] = useState<CardInputProps>({
      first: "",
      second: "",
      third: "",
      fourth: "",
      MM: "",
      YY: "",
      CVC: "",
    });
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>(
      {}
    );

    const handleErrorMessage = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        cvc: message,
      }));
    };

    return (
      <div style={{ width: "300px" }}>
        <InputGroup label="CVC" errorKey="cvc" errorMessages={errorMessages}>
          {renderCVCInput(setCardInput, handleErrorMessage)}
        </InputGroup>
      </div>
    );
  },
};

export const InputGroupWithError: Story = {
  render: () => {
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>({
      cardNumber: "숫자만 입력 가능합니다.",
    });

    return (
      <div style={{ width: "300px" }}>
        <InputGroup
          label="카드번호"
          errorKey="cardNumber"
          errorMessages={errorMessages}
        >
          <div
            style={{
              padding: "8px",
              border: "1px solid var(--color-red)",
              borderRadius: "4px",
            }}
          >
            abcd
          </div>
        </InputGroup>
      </div>
    );
  },
};

export const PaymentFormExample: Story = {
  render: () => {
    const [cardInput, setCardInput] = useState<CardInputProps>({
      first: "",
      second: "",
      third: "",
      fourth: "",
      MM: "",
      YY: "",
      CVC: "",
    });
    const [errorMessages, setErrorMessages] = useState<Record<string, string>>(
      {}
    );

    const handleCardNumberError = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        cardNumber: message,
      }));
    };

    const handleExpiryDateError = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        expiryDate: message,
      }));
    };

    const handleCVCError = (message: string) => {
      setErrorMessages((prev) => ({
        ...prev,
        cvc: message,
      }));
    };

    return (
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <InputGroup
          label="카드번호"
          errorKey="cardNumber"
          errorMessages={errorMessages}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <Input
              maxLength={4}
              placeholder="0000"
              inputKey="first"
              setCardInput={setCardInput}
              validate={validateCardNumber}
              handleErrorMessage={handleCardNumberError}
            />
            <Input
              maxLength={4}
              placeholder="0000"
              inputKey="second"
              setCardInput={setCardInput}
              validate={validateCardNumber}
              handleErrorMessage={handleCardNumberError}
            />
            <Input
              maxLength={4}
              placeholder="0000"
              inputKey="third"
              setCardInput={setCardInput}
              validate={validateCardNumber}
              handleErrorMessage={handleCardNumberError}
            />
            <Input
              maxLength={4}
              placeholder="0000"
              inputKey="fourth"
              setCardInput={setCardInput}
              validate={validateCardNumber}
              handleErrorMessage={handleCardNumberError}
            />
          </div>
        </InputGroup>

        <div style={{ display: "flex", gap: "12px" }}>
          <InputGroup
            label="유효기간"
            errorKey="expiryDate"
            errorMessages={errorMessages}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <Input
                maxLength={2}
                placeholder="MM"
                inputKey="MM"
                setCardInput={setCardInput}
                validate={validateCardNumber}
                handleErrorMessage={handleExpiryDateError}
              />
              <span style={{ alignSelf: "center" }}>/</span>
              <Input
                maxLength={2}
                placeholder="YY"
                inputKey="YY"
                setCardInput={setCardInput}
                validate={validateCardExpirationDateYY}
                handleErrorMessage={handleExpiryDateError}
              />
            </div>
          </InputGroup>

          <InputGroup label="CVC" errorKey="cvc" errorMessages={errorMessages}>
            <Input
              maxLength={3}
              placeholder="CVC"
              inputKey="CVC"
              setCardInput={setCardInput}
              validate={validateCardCVC}
              handleErrorMessage={handleCVCError}
            />
          </InputGroup>
        </div>
      </div>
    );
  },
};
