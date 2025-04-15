import type { Meta, StoryObj } from "@storybook/react";
import Subtitle from "../components/Subtitle/Subtitle";

const meta = {
  title: "Subtitle",
  component: Subtitle,
} satisfies Meta<typeof Subtitle>;

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const CardSubTitle: Story = {
  args: {
    subtitle: "카드 번호",
  },
};

export const ExpirationPeriodSubTitle: Story = {
  args: {
    subtitle: "유효기간",
  },
};

export const CVCSubTitle: Story = {
  args: {
    subtitle: "CVC",
  },
};
