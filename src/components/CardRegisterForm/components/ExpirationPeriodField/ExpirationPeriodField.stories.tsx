import type { Meta, StoryObj } from "@storybook/react";
import ExpirationPeriodField from "./ExpirationPeriodField";

const meta = {
  title: "ExpirationPeriodField",
  component: ExpirationPeriodField,
} satisfies Meta<typeof ExpirationPeriodField>;

export default meta;

const expiredPeriodState = {
  values: {
    expirationMonth: "",
    expirationYear: "",
  },
  onChange: () => {},
  errors: "",
};

type Story = StoryObj<typeof ExpirationPeriodField>;

export const Default: Story = {
  args: {
    expiredPeriodState,
  },
};
