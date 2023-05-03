import { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "../FormInputs/PasswordInput";

const meta = {
  component: PasswordInput,
  title: "Input/Password",
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    password: {
      password1: "2",
      password2: "3",
    },
  },
};
