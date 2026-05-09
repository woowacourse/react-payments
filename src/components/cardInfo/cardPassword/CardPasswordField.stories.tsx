import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPasswordField from "./CardPasswordField";

const meta: Meta<typeof CardPasswordField> = {
  title: "Components/CardPasswordField",
  component: CardPasswordField,
};

export default meta;

type Story = StoryObj<typeof CardPasswordField>;

export const Default: Story = {
  render: () => {
    const [password, setPassword] = useState("");
    return <CardPasswordField field={{ value: password, set: setPassword }} />;
  },
};
