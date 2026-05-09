import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CvcField from "./CvcField";

const meta: Meta<typeof CvcField> = {
  title: "Components/CvcField",
  component: CvcField,
};

export default meta;

type Story = StoryObj<typeof CvcField>;

export const Default: Story = {
  render: () => {
    const [cvc, setCvc] = useState("");
    return <CvcField field={{ value: cvc, set: setCvc }} />;
  },
};
