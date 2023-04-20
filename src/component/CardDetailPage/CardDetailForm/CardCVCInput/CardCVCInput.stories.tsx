import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardCVCInput from "./CardCVCInput";

const meta = {
  component: CardCVCInput,
  title: "CardDetailForm/CardCVCInput",
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardCVC: "•••",
  },
};
