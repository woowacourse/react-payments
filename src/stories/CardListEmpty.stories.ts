import CardListEmpty from "@/components/CardList/CardListEmpty";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListEmpty",
  component: CardListEmpty,
  args: {
    onAddCard: () => {},
  },
} satisfies Meta<typeof CardListEmpty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
