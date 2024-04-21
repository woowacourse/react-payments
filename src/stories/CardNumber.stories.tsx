import { Meta, StoryObj } from "@storybook/react";
import CardNumber from "../components/Card/CardNumber";

const meta = {
  title: "CardNumber",
  component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: "",
  },
};

export const WithNumber: Story = {
  args: {
    cardNumber: "1234",
  },
};
