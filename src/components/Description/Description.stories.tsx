import type { Meta, StoryObj } from "@storybook/react";
import Description from "./Description";

const meta = {
  title: "Description",
  component: Description,
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof Description>;

export const CardDescription: Story = {
  args: {
    description: "본인 명의의 카드만 결제 가능합니다.",
  },
};

export const ExpirationPeriodDescription: Story = {
  args: {
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  },
};
