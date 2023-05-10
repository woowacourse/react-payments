import type { Meta, StoryObj } from "@storybook/react";
import Spinner from ".";

const spinner = {
  component: Spinner,
  title: "Spinner",
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} satisfies Meta<typeof Spinner>;

export default spinner;

type Story = StoryObj<typeof spinner>;

export const Default: Story = {
  args: {
    title: "카드 등록중입니다",
  },
};
