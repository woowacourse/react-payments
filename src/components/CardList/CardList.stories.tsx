import { Card } from "../../types";
import CardList from "./CardList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardList> = {
  title: "CardList",
  component: CardList,
  tags: ["autodocs"],
  argTypes: {
    cards: {
      description: "생성 완료된 카드로 이루어진 객체 배열입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

const card: Card = {
  cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
  ownerName: "KIM",
  expirationDate: { month: "10", year: "96" },
  securityCode: "123",
  password: { first: "1", second: "2" },
  cardCompany: "BC",
  alias: "",
};

export const Default: Story = {
  render: () => {
    return <CardList cards={[]} />;
  },
};

export const SingleCard: Story = {
  render: () => {
    return <CardList cards={[card]} />;
  },
};

export const ManyCards: Story = {
  render: () => {
    return <CardList cards={[card, card, card, card, card]} />;
  },
};
