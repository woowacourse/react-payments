import type { Meta, StoryObj } from "@storybook/react";
import Error from "./Error";

const meta = {
  title: "Error",
  component: Error,
  tags: ["autodocs"],
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    errorMessage: "",
    isVisible: false,
  },
};

export const WithError: Story = {
  args: {
    errorMessage: "숫자만 입력 가능합니다.",
    isVisible: true,
  },
};
