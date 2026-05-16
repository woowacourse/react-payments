import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import ExpireDateField from "./ExpireDateField";

const meta: Meta<typeof ExpireDateField> = {
  title: "Components/ExpireDateField",
  component: ExpireDateField,
};

export default meta;

type Story = StoryObj<typeof ExpireDateField>;

export const Default: Story = {
  render: () => {
    const [expireDate, setExpireDate] = useState(["", ""]);
    return (
      <ExpireDateField field={{ value: expireDate, set: setExpireDate }} />
    );
  },
};
