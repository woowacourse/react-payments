import CardListError from "@/components/CardList/CardListError";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListError",
  component: CardListError,
  args: {
    onRetry: () => {},
  },
} satisfies Meta<typeof CardListError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
