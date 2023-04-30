import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "./CardPasswordInput";
import { CardDetailProvider } from "../../../../context/CardDetailContext";

const meta = {
  component: CardPasswordInput,
  title: "CardDetailForm/CardPasswordInput",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
