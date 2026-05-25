import CardListItemSkeleton from "@/components/CardList/CardListItemSkeleton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListItemSkeleton",
  component: CardListItemSkeleton,
} satisfies Meta<typeof CardListItemSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
