import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardOwnerNameInput from "./CardOwnerNameInput";
import { CardDetailProvider } from "../../../../context/CardDetailContext";

const meta = {
  component: CardOwnerNameInput,
  title: "CardDetailForm/CardOwnerNameInput",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
