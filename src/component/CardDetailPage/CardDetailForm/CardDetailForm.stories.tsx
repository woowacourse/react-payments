import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDetailForm from "./CardDetailForm";

const meta = {
  component: CardDetailForm,
  title: "CardDetail/CardDetailForm",
} satisfies Meta<typeof CardDetailForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
