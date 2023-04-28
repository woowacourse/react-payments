import type { Meta, StoryObj } from "@storybook/react";

import Title from "../../components/common/Title";

const meta = {
  title: "Payment/Common",
  component: Title,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeTitle: Story = {
  args: {
    title: "타이틀입니다.",
    size: "large",
  },
};

export const DefaulTitle: Story = {
  args: {
    title: "타이틀입니다.",
    size: "medium",
  },
};
