import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardOwnerNameInput from "./CardOwnerNameInput";
import { Card } from "../../types";

const meta: Meta<typeof CardOwnerNameInput> = {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,
};

export default meta;
type Story = StoryObj<typeof CardOwnerNameInput>;

const CardOwnerNameInputwithHooks = () => {
  const [ownerName, setOwnerName] = useState<Card["ownerName"]>("");

  const handleOwnerName = (name: string) => {
    const upperCaseName = name.toUpperCase();

    setOwnerName(upperCaseName);
  };
  return <CardOwnerNameInput ownerName={ownerName} onChange={handleOwnerName} />;
};

export const Default: Story = {
  render: () => {
    return <CardOwnerNameInputwithHooks />;
  },
};
