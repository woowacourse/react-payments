import type { Meta, StoryObj } from "@storybook/react";
import Preview from "./Preview";

const meta = {
  title: "Preview",
  component: Preview,
  tags: ["autodocs"],
} satisfies Meta<typeof Preview>;

export default meta;

type Story = StoryObj<typeof Preview>;

export const Default: Story = {
  args: {
    cardNumbers: ["1234", "1233", "1232", "1211"],
    expirationPeriod: ["02", "13"],
  },
};
