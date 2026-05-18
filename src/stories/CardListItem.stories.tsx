import CardListItem from "@/components/CardList/CardListItem";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListItem",
  component: CardListItem,
  args: {
    card: {
      id: "card-1",
      issuerCode: "41",
      number: "551112******9012",
      expirationDate: "12/28",
    },
  },
  decorators: [
    (Story) => (
      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof CardListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
