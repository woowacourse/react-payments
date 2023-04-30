import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDateInput from "./CardDateInput";
import { CardDetailProvider } from "../../../../context/CardDetailContext";

const meta = {
  component: CardDateInput,
  title: "CardDetailForm/CardDateInput",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
