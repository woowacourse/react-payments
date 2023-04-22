import { Meta, StoryObj } from "@storybook/react";
import Input from "../../components/common/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "MM",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "",
  },
};
