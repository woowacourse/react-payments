import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDateInput from "./index";

const meta = {
  component: CardDateInput,
  title: "CardDetailForm/CardDateInput",
} satisfies Meta<typeof CardDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardDate: "12/25",
  },
};
