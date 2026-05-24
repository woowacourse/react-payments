import type { Meta, StoryObj } from "@storybook/react-vite";

import DashedButton from "../components/common/DashedButton";

const meta = {
  title: "DashedButton",
  component: DashedButton,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    fullWidth: { control: "boolean" },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof DashedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "새로운 카드 추가하기",
  },
};

export const Rounded: Story = {
  args: {
    children: "새로운 카드 추가하기",
    rounded: true,
  },
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "32rem" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: "새로운 카드 추가하기",
    fullWidth: true,
  },
};

export const FullWidthRounded: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "32rem" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: "새로운 카드 추가하기",
    fullWidth: true,
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "새로운 카드 추가하기",
    disabled: true,
  },
};

export const DisabledRounded: Story = {
  args: {
    children: "새로운 카드 추가하기",
    rounded: true,
    disabled: true,
  },
};
