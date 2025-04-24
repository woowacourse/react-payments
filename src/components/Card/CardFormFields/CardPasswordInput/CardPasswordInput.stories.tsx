import type { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "./CardPasswordInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../../.storybook/utils/withCustomCardValidationProvider";

const meta = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof CardPasswordInput>;

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
      passwordError: {
        errorMessage: null,
        hasError: true,
      },
    }),
  ],
};
