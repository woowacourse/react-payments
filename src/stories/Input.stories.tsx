import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  placeholder: "Default Input",
};

export const NumberInput: Story = {};
NumberInput.args = {
  placeholder: "1234",
};
