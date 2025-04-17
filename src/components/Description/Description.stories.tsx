import type { Meta, StoryObj } from "@storybook/react";
import Description from "./Description";

const meta = {
  title: "Description",
  component: Description,
  tags: ["autodocs"],
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    description: "본인 명의의 카드만 결제 가능합니다.",
  },
};
