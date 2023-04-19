import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Header from "./Header";

const header = {
  component: Header,
  title: "Header",
} satisfies Meta<typeof Header>;

export default header;

type Story = StoryObj<typeof header>;

export const Example = {
  args: {
    headingText: "카드 추가",
    backButton: true,
  },
} satisfies Story;
