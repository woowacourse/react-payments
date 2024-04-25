import { Meta, StoryObj } from "@storybook/react";

import CardPreview from "../components/payment/CardEnrollForm/CardPreview";

const meta: Meta<typeof CardPreview> = {
  component: CardPreview,
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardInformation: {
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
      cardExpirationMonth: "",
      cardExpirationYear: "",
      cardOwnerName: "",
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardInformation: {
      cardNumber1: "4243",
      cardNumber2: "1234",
      cardNumber3: "1234",
      cardNumber4: "1234",
      cardExpirationMonth: "12",
      cardExpirationYear: "24",
      cardOwnerName: "Jaewi Myong",
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardInformation: {
      cardNumber1: "5143",
      cardNumber2: "1234",
      cardNumber3: "1234",
      cardNumber4: "1234",
      cardExpirationMonth: "12",
      cardExpirationYear: "24",
      cardOwnerName: "Jaewi Myong",
    },
  },
  render: ({ ...args }) => {
    return <CardPreview {...args} />;
  },
};
