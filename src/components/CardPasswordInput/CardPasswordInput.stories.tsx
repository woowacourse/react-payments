import { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "./CardPasswordInput";

const meta: Meta<typeof CardPasswordInput> = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export default meta;

type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {
  args: {
    password: { first: "", second: "" },
  },
};

export const Filled: Story = {
  args: {
    password: { first: "1", second: "2" },
  },
};
