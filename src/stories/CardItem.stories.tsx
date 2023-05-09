import { Meta, StoryObj } from "@storybook/react";
import { CardItem } from "../components/cardList/CardItem";

const meta: Meta<typeof CardItem> = {
  title: "CardItem",
  component: CardItem,
  tags: ["atuodocs"],
};

export default meta;
type Story = StoryObj<typeof CardItem>;

export const ShinhanCard: Story = {
  args: {
    card: {
      numbers: ["1234", "1234", "1234", "1234"],
      owner: "DAHYE",
      expiryDate: "12 / 25",
      CVC: 123,
      password: ["1", "2"],
      company: "신한카드",
      color: "#A6D0DD",
      name: "엄마카드",
      id: "randomId",
    },
  },
};
