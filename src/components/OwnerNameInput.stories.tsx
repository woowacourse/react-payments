import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import OwnerNameInput from "./OwnerNameInput";

const ownerNameInput = {
  component: OwnerNameInput,
  title: "OwnerNameInput",
} satisfies Meta<typeof OwnerNameInput>;

export default ownerNameInput;

type Story = StoryObj<typeof ownerNameInput>;

export const Example = {
  args: {},
} satisfies Story;
