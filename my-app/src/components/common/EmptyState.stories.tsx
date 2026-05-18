import type { Meta, StoryObj } from "@storybook/react-vite";
import EmptyState from "./EmptyState";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    icon: <span style={{ fontSize: 48 }}>💳</span>,
    title: "카드가 없어요",
    description: "새로운 카드를 등록해 주세요.",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <EmptyState {...args} />
    </div>
  ),
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoCards: Story = {};

export const ErrorState: Story = {
  args: {
    icon: <span style={{ fontSize: 48 }}>⚠️</span>,
    title: "오류가 발생했어요",
    description: "카드 목록을 불러오는 중 문제가 생겼습니다.",
  },
};
