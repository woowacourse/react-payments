import type { Meta, StoryObj } from "@storybook/react";
import CardDisplay from "../components/CardDisplay/CardDisplay";

const meta = {
  title: "CardDisplay",
  component: CardDisplay,
} satisfies Meta<typeof CardDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: {
      firstNumber: "1234",
      secondNumber: "1234",
      thirdNumber: "1234",
      fourthNumber: "1234",
    },
    cardExpirationDate: {
      month: "12",
      year: "25",
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: {
      firstNumber: "4444",
      secondNumber: "1234",
      thirdNumber: "1234",
      fourthNumber: "1234",
    },
    cardExpirationDate: {
      month: "12",
      year: "25",
    },
  },
};

export const Master: Story = {
  args: {
    cardNumbers: {
      firstNumber: "5555",
      secondNumber: "1234",
      thirdNumber: "1234",
      fourthNumber: "1234",
    },
    cardExpirationDate: {
      month: "12",
      year: "25",
    },
  },
};
