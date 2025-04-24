import { Meta, StoryObj } from "@storybook/react";
import CardPasswordInputs from "./cardPasswordInputs";

const meta = {
  title: "CardPasswordInputs",
  component: CardPasswordInputs,
} satisfies Meta<typeof CardPasswordInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
