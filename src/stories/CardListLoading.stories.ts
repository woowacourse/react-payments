import CardListLoading from "@/components/CardList/CardListLoading";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListLoading",
  component: CardListLoading,
} satisfies Meta<typeof CardListLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
