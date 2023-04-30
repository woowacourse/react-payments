import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardCVCInput from "./CardCVCInput";
import { CardDetailProvider } from "../../../../context/CardDetailContext";

const meta = {
  component: CardCVCInput,
  title: "CardDetailForm/CardCVCInput",
  decorators: [
    (Story) => (
      <CardDetailProvider>
        <Story />
      </CardDetailProvider>
    ),
  ],
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
