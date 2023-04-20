import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "./index";

const meta = {
  component: CardPasswordInput,
  title: "CardDetailForm/CardPasswordInput",
} satisfies Meta<typeof CardPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => {
      console.log(e.currentTarget.value);
    },
    cardPassword: ["1", "2"],
  },
};
