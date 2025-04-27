import { Meta, StoryObj } from "@storybook/react";
import Button from "../ui/Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "버튼입니다.",
  },
};
