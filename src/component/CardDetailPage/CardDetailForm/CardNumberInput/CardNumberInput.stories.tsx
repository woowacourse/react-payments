import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";
import { CardDetailProvider } from "../../../../context/CardDetailContext";

const meta = {
  component: CardNumberInput,
  title: "CardDetailForm/CardNumberInput",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
