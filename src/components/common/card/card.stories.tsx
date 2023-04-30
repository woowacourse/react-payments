import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "creditCard",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    cardNumber: {
      first: "1111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    month: "11",
    year: "25",
    userName: "nave",
    cardColor: {
      bgColor: "#000000",
      fontColor: "#ffffff",
    },
    bank: "bc",
  },
};
