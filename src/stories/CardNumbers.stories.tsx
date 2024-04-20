import { Meta, StoryObj } from "@storybook/react";

import CardNumbers from "../components/CardNumbers";
import { useState } from "react";

const meta: Meta<typeof CardNumbers> = {
  component: CardNumbers,
};

export default meta;
type Story = StoryObj<typeof CardNumbers>;

export const Default: Story = {
  // args: {
  //   cardNumber1: "",
  //   cardNumber2: "",
  //   cardNumber3: "",
  //   cardNumber4: "",
  //   inputHandler: (inputValue: string, inputId: string) => {},
  // },
  render: ({ ...args }) => {
    const [cardInformation, setCardInformation] = useState({
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
    });

    const inputHandler = (inputValue: string, inputId: string) => {
      setCardInformation((prev) => ({
        ...prev,
        [inputId]: inputValue,
      }));
    };

    return (
      <CardNumbers
        {...args}
        cardNumber1={cardInformation.cardNumber1}
        cardNumber2={cardInformation.cardNumber2}
        cardNumber3={cardInformation.cardNumber3}
        cardNumber4={cardInformation.cardNumber4}
        onChange={inputHandler}
      />
    );
  },
};

export const ErrorWithNotNumber: Story = {
  args: {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    onChange: (inputValue: string, inputId: string) => {},
  },
  render: ({ ...args }) => {
    return (
      <CardNumbers
        {...args}
        cardNumber1={args.cardNumber1}
        cardNumber2={args.cardNumber2}
        cardNumber3={args.cardNumber3}
        cardNumber4={args.cardNumber4}
        onChange={args.onChange}
      />
    );
  },
};

export const ErrorWithFourDigits: Story = {
  args: {
    cardNumber1: "1",
    cardNumber2: "12",
    cardNumber3: "123",
    cardNumber4: "1234",
  },
  render: ({ ...args }) => {
    return (
      <CardNumbers
        {...args}
        cardNumber1={args.cardNumber1}
        cardNumber2={args.cardNumber2}
        cardNumber3={args.cardNumber3}
        cardNumber4={args.cardNumber4}
      />
    );
  },
};
