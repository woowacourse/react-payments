import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";

const cardNumberErrors = {
  first: false,
  second: false,
  third: false,
  fourth: false,
};

const meta = {
  title: "CardNumberInput",
  component: CardNumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cardNumberErrors: cardNumberErrors,
    validateCardNumber: () => {},
  },
};

export const WithError: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cardNumberErrors: {
      ...cardNumberErrors,
      first: true,
    },
    validateCardNumber: () => {},
  },
};

export const WithErrors: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cardNumberErrors: {
      ...cardNumberErrors,
      first: true,
      third: true,
    },
    validateCardNumber: () => {},
  },
};
