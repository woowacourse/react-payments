import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";

import CardListSection from "./CardListSection";

const meta = {
  title: "Card/CardListSection",
  component: CardListSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    status: "pending",
    cards: [
      {
        id: "1234-1234-1234-1234-1234",
        issuerCode: "31",
        number: "5511128340239012",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1235",
        issuerCode: "41",
        number: "4733321003658888",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1236",
        issuerCode: "15",
        number: "36190099987671",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1237",
        issuerCode: "W1",
        number: "349412345328962",
        expirationDate: "12/28",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    status: "empty",
    cards: [],
  },
};

export const WithCards: Story = {
  args: {
    status: "success",
    cards: [
      {
        id: "1234-1234-1234-1234-1234",
        issuerCode: "31",
        number: "5511128340239012",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1235",
        issuerCode: "41",
        number: "4733321003658888",
        expirationDate: "12/28",
      },
      {
        id: "1234-1234-1234-1234-1236",
        issuerCode: "15",
        number: "36190099987671",
        expirationDate: "12/28",
      },
    ],
  },
};
