import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../../.storybook/utils/withCustomCardValidationProvider";

const meta = {
  title: "CardNumberInput",
  component: CardNumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
};

export const WithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cardNumberErrors: {
        first: true,
        second: false,
        third: false,
        fourth: false,
      },
    }),
  ],
};

export const WithErrors: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cardNumberErrors: {
        first: true,
        second: true,
        third: true,
        fourth: false,
      },
    }),
  ],
};
