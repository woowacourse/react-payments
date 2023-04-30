import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import CardDetailPage from "./CardDetailPage";
import { CardDetailProvider } from "../../context/CardDetailContext";
import { Card } from "../../types/card";

const meta = {
  component: CardDetailPage,
  title: "Page/CardDetailPage",
  decorators: [
    withRouter,
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setLastCard: (card: Card) => {
      console.log(card);
    },
  },
};
