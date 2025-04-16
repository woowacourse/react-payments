import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const CardTitle: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
  },
};

export const ExpirationPeriodTitle: Story = {
  args: {
    title: "카드 유효기간을 입력해 주세요",
  },
};

export const CVCTitle: Story = {
  args: {
    title: "CVC 번호를 입력해 주세요",
  },
};
