import CardListError from "@/components/CardList/CardListError";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListError",
  component: CardListError,
  args: {
    message: "카드 목록을 불러올 수 없어요",
    onRetry: () => {},
  },
} satisfies Meta<typeof CardListError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
