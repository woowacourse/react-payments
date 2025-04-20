import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { CardInputProps } from "../../types/CardInputTypes";
import InputGroup from "./InputGroup";
import CardInput from "../CardInput";
import {
  validateCardCVC,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardNumber,
} from "../../validation/validation";

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
  <CardInput
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
    <CardInput
      maxLength={2}
      placeholder="MM"
      inputKey="MM"
      setCardInput={setCardInput}
      validate={validateCardExpirationDateMM}
      handleErrorMessage={handleErrorMessage}
    />
    <span style={{ alignSelf: "center" }}>/</span>
    <CardInput
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
  <CardInput
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
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: "",
        second: "",
        third: "",
        fourth: "",
        MM: "",
        YY: "",
        CVC: "",
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages((prev) => ({
          ...prev,
          cardNumber: message,
        }));
      };

      const handleCardNumberErrorMessages = () => {
        const filterErrorMessage = [
          errorMessages.first,
          errorMessages.second,
          errorMessages.third,
          errorMessages.fourth,
        ].filter((message) => message?.length);
        return filterErrorMessage[0];
      };

      return (
        <div style={{ width: "300px" }}>
          <InputGroup
            label="카드번호"
            errorMessages={handleCardNumberErrorMessages()}
          >
            {renderCardNumberInput(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const ExpiryDateInputGroup: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: "",
        second: "",
        third: "",
        fourth: "",
        MM: "",
        YY: "",
        CVC: "",
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages((prev) => ({
          ...prev,
          expiryDate: message,
        }));
      };

      const handlePeriodErrorMessages = () => {
        const filterErrorMessage = [errorMessages.MM, errorMessages.YY].filter(
          (msg) => msg?.length
        );
        return filterErrorMessage[0];
      };

      return (
        <div style={{ width: "300px" }}>
          <InputGroup
            label="유효기간"
            errorMessages={handlePeriodErrorMessages()}
          >
            {renderExpiryDateInputs(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const CVCInputGroup: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: "",
        second: "",
        third: "",
        fourth: "",
        MM: "",
        YY: "",
        CVC: "",
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleErrorMessage = (message: string) => {
        setErrorMessages((prev) => ({
          ...prev,
          cvc: message,
        }));
      };

      return (
        <div style={{ width: "300px" }}>
          <InputGroup label="CVC" errorMessages={errorMessages.cvc}>
            {renderCVCInput(setCardInput, handleErrorMessage)}
          </InputGroup>
        </div>
      );
    };

    return <Component />;
  },
};

export const InputGroupWithError: Story = {
  render: () => {
    const Component = () => {
      const [errorMessages] = useState<Record<string, string>>({
        cardNumber: "숫자만 입력 가능합니다.",
      });

      return (
        <div style={{ width: "300px" }}>
          <InputGroup label="카드번호" errorMessages={errorMessages.cardNumber}>
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
    };

    return <Component />;
  },
};

export const PaymentFormExample: Story = {
  render: () => {
    const Component = () => {
      const [cardInput, setCardInput] = useState<CardInputProps>({
        first: "",
        second: "",
        third: "",
        fourth: "",
        MM: "",
        YY: "",
        CVC: "",
      });
      const [errorMessages, setErrorMessages] = useState<
        Record<string, string>
      >({});

      const handleCardNumberError = (message: string) => {
        setErrorMessages((prev) => ({
          ...prev,
          second: message,
        }));
      };

      const handleExpiryDateError = (message: string) => {
        setErrorMessages((prev) => ({
          ...prev,
          third: message,
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
          <InputGroup label="카드번호" errorMessages={errorMessages.second}>
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
            <InputGroup label="유효기간" errorMessages={errorMessages.third}>
              <div style={{ display: "flex", gap: "8px" }}>
                <Input
                  maxLength={2}
                  placeholder="MM"
                  inputKey="MM"
                  setCardInput={setCardInput}
                  validate={validateCardExpirationDateMM}
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

            <InputGroup label="CVC" errorMessages={errorMessages.cvc}>
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
    };

    return <Component />;
  },
};
