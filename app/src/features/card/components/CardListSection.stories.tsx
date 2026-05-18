import type { Meta, StoryObj } from "@storybook/react-vite";

import CardListSection from "./CardListSection";

const meta = {
  title: "Card/CardListSection",
  component: CardListSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cards: [],
  },
};

export const WithCards: Story = {
  args: {
    cards: [
      {
        id: "1234-1234-1234-1234-1234",
        issuerCode: "31",
        number: "551112******9012",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1235",
        issuerCode: "41",
        number: "773332******8888",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1236",
        issuerCode: "15",
        number: "091900******7129",
        expirationDate: "12/28",
      },
    ],
  },
};
