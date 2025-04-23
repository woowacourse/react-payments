import type { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "./CardPasswordInput";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    passwordError: false,
    validatePassword: () => {},
  },
};

export const WithError: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    passwordError: true,
    validatePassword: () => {},
  },
};
