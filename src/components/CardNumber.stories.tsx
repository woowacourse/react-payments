import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardNumber from "./CardNumber";

const cardNumber = {
  component: CardNumber,
  title: "Card Number Input",
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

type Story = StoryObj<typeof cardNumber>;

export const Example = {
  args: {},
} satisfies Story;
