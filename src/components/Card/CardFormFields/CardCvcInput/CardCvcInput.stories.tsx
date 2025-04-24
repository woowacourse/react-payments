import type { Meta, StoryObj } from "@storybook/react";
import CardCvcInput from "./CardCvcInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../../.storybook/utils/withCustomCardValidationProvider";

const meta = {
  title: "CardCvcInput",
  component: CardCvcInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardCvcInput>;

export default meta;

type Story = StoryObj<typeof CardCvcInput>;

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
      cvcNumberError: {
        errorMessage: null,
        hasError: true,
      },
    }),
  ],
};
