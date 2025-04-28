import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import { useState } from "react";
import { InputFieldProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MyInputField",
  component: InputField,
} satisfies Meta<InputFieldProps<"uniqueNumber" | "expirationDate" | "cvcNumber" | "password">>;

export default meta;

type Story = StoryObj<InputFieldProps<"uniqueNumber" | "expirationDate" | "cvcNumber" | "password">>;

export const UniqueNumberInputField: Story = {
  args: {
    label: "카드번호",
    inputNumber: 4,
    inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
    cardInformation: ["", "", "", ""],
    eachValidation: {
      isError: [false, false, false, false],
      errorMessage: "",
      validateInput: () => {},
    },
  },
  render: (args) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        eachValidation={args.eachValidation}
      />
    );
  },
};

export const ExpirationDateInputField: Story = {
  args: {
    label: "유효기간",
    inputNumber: 2,
    inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
    cardInformation: ["", ""],
    eachValidation: {
      isError: [false, false],
      errorMessage: "",
      validateInput: () => {},
    },
  },
  render: (args) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        eachValidation={args.eachValidation}
      />
    );
  },
};

export const CvcNumberInputField: Story = {
  args: {
    label: "cvc",
    inputNumber: 1,
    inputProps: { placeholder: ["123"], maxLength: 3 },
    cardInformation: [""],
    eachValidation: {
      isError: [false, false],
      errorMessage: "",
      validateInput: () => {},
    },
  },
  render: (args) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        eachValidation={args.eachValidation}
      />
    );
  },
};

export const PasswordInputField: Story = {
  args: {
    label: "비밀번호 앞 2자리",
    inputNumber: 1,
    inputProps: { placeholder: [""], maxLength: 2 },
    cardInformation: [""],
    eachValidation: {
      isError: [false, false],
      errorMessage: "",
      validateInput: () => {},
    },
  },
  render: (args) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        eachValidation={args.eachValidation}
      />
    );
  },
};
