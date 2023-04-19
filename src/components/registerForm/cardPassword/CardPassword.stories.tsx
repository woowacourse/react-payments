import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardPassword from ".";

const cardPassword = {
  component: CardPassword,
  title: "CardPassword",
} satisfies Meta<typeof CardPassword>;

export default cardPassword;

type Story = StoryObj<typeof cardPassword>;

export const Example = {
  args: {},
} satisfies Story;
