import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationPeriodInput from "./CardExpirationPeriodInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardExpirationPeriodInput",
  component: CardExpirationPeriodInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpirationPeriodInput>;

export default meta;

type Story = StoryObj<typeof CardExpirationPeriodInput>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    expirationPeriodErrors: {
      month: false,
      year: false,
    },
    validateExpirationPeriod: () => {},
  },
};

export const WithError: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    expirationPeriodErrors: {
      month: true,
      year: false,
    },
    validateExpirationPeriod: () => {},
  },
};

export const WithErrors: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    expirationPeriodErrors: {
      month: true,
      year: true,
    },
    validateExpirationPeriod: () => {},
  },
};
