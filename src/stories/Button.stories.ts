import { StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NextButton: Story = {
  args: {
    text: "다음",
    isShown: true,
  },
};

export const ConfirmButton: Story = {
  args: {
    text: "확인",
    isShown: true,
  },
};
