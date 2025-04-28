import type { Meta, StoryObj } from "@storybook/react";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";
import PasswordInput from "./PasswordInput";

const meta = {
  title: "PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    value: "01",
    error: false,
  },
  decorators: [withCardProviders({})],
};

export const WithError: Story = {
  args: {
    value: "as",
    error: true,
  },
  decorators: [withCardProviders({})],
};
