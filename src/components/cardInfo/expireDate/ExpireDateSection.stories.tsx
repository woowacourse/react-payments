import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import ExpireDateSection from "./ExpireDateSection";

const meta: Meta<typeof ExpireDateSection> = {
  title: "Components/ExpireDateSection",
  component: ExpireDateSection,
};

export default meta;

type Story = StoryObj<typeof ExpireDateSection>;

export const Default: Story = {
  render: () => {
    const [expireDate, setExpireDate] = useState(["", ""]);
    return (
      <ExpireDateSection expireDate={expireDate} setExpireDate={setExpireDate} />
    );
  },
};
