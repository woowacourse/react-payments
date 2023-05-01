import { Meta, StoryObj } from "@storybook/react";
import { CardPassword } from "./cardPassword";

const meta: Meta<typeof CardPassword> = {
  component: CardPassword,
  title: "CardPassword",
};

export default meta;

type Story = StoryObj<typeof CardPassword>;

export const Default: Story = {
  args: {},
};
