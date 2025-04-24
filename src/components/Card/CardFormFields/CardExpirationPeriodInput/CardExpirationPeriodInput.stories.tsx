import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationPeriodInput from "./CardExpirationPeriodInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../../.storybook/utils/withCustomCardValidationProvider";

const meta = {
  title: "CardExpirationPeriodInput",
  component: CardExpirationPeriodInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpirationPeriodInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationPeriodInput>;

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
      expirationPeriodErrors: {
        month: true,
        year: false,
      },
    }),
  ],
};

export const WithErrors: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      expirationPeriodErrors: {
        month: true,
        year: true,
      },
    }),
  ],
};
