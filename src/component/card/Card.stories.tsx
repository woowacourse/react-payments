import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

const renderBrandCard = (cardType: "default" | "visa" | "mastercard") => {
  const cardNumber = {
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
  };
  return <Card cardNumber={cardNumber} cardType={cardType} />;
};

export const Default: Story = {
  render: () => renderBrandCard("default"),
};

export const Visa: Story = {
  render: () => renderBrandCard("visa"),
};

export const Mastercard: Story = {
  render: () => renderBrandCard("mastercard"),
};

export const InputTwoCardNumber: Story = {
  args: {
    cardNumber: {
      first: 1111,
      second: 2222,
      third: null,
      fourth: null,
      MM: null,
      YY: null,
      CVC: null,
    },
  },
  render: (args) => <Card cardNumber={args.cardNumber} cardType="default" />,
};

export const InputFourCardNumber: Story = {
  args: {
    cardNumber: {
      first: 1111,
      second: 2222,
      third: 3333,
      fourth: 4444,
      MM: null,
      YY: null,
      CVC: null,
    },
  },
  render: (args) => <Card cardNumber={args.cardNumber} cardType="default" />,
};

export const InputExpiration: Story = {
  args: {
    cardNumber: {
      first: 1111,
      second: 2222,
      third: 3333,
      fourth: 4444,
      MM: 12,
      YY: 25,
      CVC: null,
    },
  },
  render: (args) => <Card cardNumber={args.cardNumber} cardType="default" />,
};
