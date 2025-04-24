import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "MyComponent/MyButton",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const OKButton: Story = {
  args: {
    text: "확인",
  },
};

export const CancelButton: Story = {
  args: {
    text: "취소",
  },
};
