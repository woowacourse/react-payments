import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ExpireDate from ".";

const expireDate = {
  component: ExpireDate,
  title: "ExpireDate Input",
} satisfies Meta<typeof ExpireDate>;

export default expireDate;

type Story = StoryObj<typeof expireDate>;

export const Example = {
  args: {},
} satisfies Story;
