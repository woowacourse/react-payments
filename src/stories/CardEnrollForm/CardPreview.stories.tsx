import { Meta, StoryObj } from "@storybook/react";

import CardPreview from "../../components/payment/CardEnrollForm/CardPreview";

const meta: Meta<typeof CardPreview> = {
  component: CardPreview,
};
export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardInformation: {
      cardNumbers: ["5434", "5678", "9012", "3456"],
      cardIssuer: "hyundai-card",
      cardExpiration: {
        month: "12",
        year: "34",
      },
      cardOwnerName: "John Doe",
      cardCvc: "123",
      cardPassword: "01",
    },
    isFlipped: false,
  },
  argTypes: {
    cardInformation: { control: "object" },
    isFlipped: { control: "boolean" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};
