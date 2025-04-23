import type { Meta, StoryObj } from "@storybook/react";
import CardCvcInput from "./CardCvcInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardCvcInput",
  component: CardCvcInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardCvcInput>;

export default meta;

type Story = StoryObj<typeof CardCvcInput>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cvcNumberError: false,
    validateCvcNumber: () => {},
  },
};

export const WithError: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cvcNumberError: true,
    validateCvcNumber: () => {},
  },
};
