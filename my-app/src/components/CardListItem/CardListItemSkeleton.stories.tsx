import type { Meta, StoryObj } from "@storybook/react-vite";
import CardListItemSkeleton from "./CardListItemSkeleton";

const meta = {
  title: "Components/CardListItemSkeleton",
  component: CardListItemSkeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: () => (
    <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 8 }}>
      <CardListItemSkeleton />
    </div>
  ),
} satisfies Meta<typeof CardListItemSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleItems: Story = {
  render: () => (
    <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 8 }}>
      <CardListItemSkeleton />
      <CardListItemSkeleton />
      <CardListItemSkeleton />
    </div>
  ),
};
