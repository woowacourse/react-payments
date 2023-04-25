import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardOwnerNameInput from "./CardOwnerNameInput";

const meta = {
  component: CardOwnerNameInput,
  title: "CardDetailForm/CardOwnerNameInput",
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardOwnerName: "루루&가람",
  },
};
