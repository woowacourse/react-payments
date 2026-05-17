import type { Meta, StoryObj } from "@storybook/react";
import CheckBtn from "./CheckBtn";

const meta: Meta<typeof CheckBtn> = {
  title: "Components/CheckBtn",
  component: CheckBtn,
};

export default meta;
type Story = StoryObj<typeof CheckBtn>;

export const Default: Story = {
  args: {
    onClick: () => alert("확인 클릭"),
  },
};
