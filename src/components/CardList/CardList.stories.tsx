import dummyCard from "../../utils/dummyCard";
import CardList from "./CardList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardList> = {
  title: "CardList",
  component: CardList,
  argTypes: {
    cards: {
      description: "생성 완료된 카드로 이루어진 객체 배열입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  render: () => {
    return <CardList cards={[]} />;
  },
};

export const SingleCard: Story = {
  render: () => {
    return <CardList cards={[dummyCard]} />;
  },
};

export const ManyCards: Story = {
  render: () => {
    return <CardList cards={[dummyCard, dummyCard, dummyCard, dummyCard, dummyCard]} />;
  },
};
