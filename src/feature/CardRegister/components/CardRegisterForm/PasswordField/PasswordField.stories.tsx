import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import PasswordField from "./PasswordField";

const meta = {
  title: "feature/CardRegister/components/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
  args: {
    password: "",
    onPasswordChange: fn(),
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    password: "12",
  },
};

export const Interactive: Story = {
  render: function InteractivePasswordField(args) {
    const [password, setPassword] = useState(args.password);

    return (
      <PasswordField
        {...args}
        password={password}
        onPasswordChange={setPassword}
      />
    );
  },
};
