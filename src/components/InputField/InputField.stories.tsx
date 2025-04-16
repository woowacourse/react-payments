import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import { useState } from "react";

const meta = {
  title: "MyComponent/MyInputField",
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const UniqueNumberInputField: Story = {
  args: {
    label: "카드번호",
    inputNumber: 4,
    inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
    cardInformation: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
    informationType: "uniqueNumber",
  },
  render: (args: any) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        informationType={args.informationType}
      />
    );
  },
};

export const ExpirationDateInputField: Story = {
  args: {
    label: "유효기간",
    inputNumber: 2,
    inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
    cardInformation: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
    informationType: "expirationDate",
  },
  render: (args: any) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        informationType={args.informationType}
      />
    );
  },
};

export const CvcNumberInputField: Story = {
  args: {
    label: "cvc",
    inputNumber: 1,
    inputProps: { placeholder: ["123"], maxLength: 3 },
    cardInformation: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
    informationType: "cvcNumber",
  },
  render: (args: any) => {
    const [value, setCardInformation] = useState(args.cardInformation);
    return (
      <InputField
        label={args.label}
        inputNumber={args.inputNumber}
        inputProps={args.inputProps}
        cardInformation={value}
        setCardInformation={setCardInformation}
        informationType={args.informationType}
      />
    );
  },
};
