import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CardDetailProvider } from "../../context/CardDetailContext";
import CardModal from "./CardModal";

const meta = {
  component: CardModal,
  title: "CardDetailView/CardModal",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    closeModal: () => {
      console.log("close!");
    },
  },
};
