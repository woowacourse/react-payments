import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "@components/common/Button";

const meta = {
  title: "Common/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "확인",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "확인",
  },
};

export const Dashed: Story = {
  args: {
    dashed: true,
    children: "+ 카드추가",
  },
};

export const FixedBottom: Story = {
  args: {
    fixedBottom: true,
    fullWidth: true,
    children: "확인",
  },
};
