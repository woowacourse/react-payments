import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDetailView from "./CardDetailView";

const meta = {
  component: CardDetailView,
  title: "CardDetail/CardDetailView",
} satisfies Meta<typeof CardDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    displayNumber: "1111-2222-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
  },
};
