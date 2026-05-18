import type { Meta, StoryObj } from "@storybook/react-vite";

import CardList from "./CardList";

const meta = {
  title: "Card/CardList",
  component: CardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cards: [],
  },
};
