import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardRegisterForm from ".";

const cardRegister = {
  component: CardRegisterForm,
  title: "CardRegisterForm Input",
} satisfies Meta<typeof CardRegisterForm>;

export default cardRegister;

type Story = StoryObj<typeof cardRegister>;

export const Example = {
  args: {},
} satisfies Story;
