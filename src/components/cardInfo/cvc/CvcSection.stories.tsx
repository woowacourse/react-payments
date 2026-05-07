import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CvcSection from "./CvcSection";

const meta: Meta<typeof CvcSection> = {
  title: "Components/CvcSection",
  component: CvcSection,
};

export default meta;

type Story = StoryObj<typeof CvcSection>;

export const Default: Story = {
  render: () => {
    const [cvc, setCvc] = useState("");
    return <CvcSection field={{ value: cvc, set: setCvc }} />;
  },
};
