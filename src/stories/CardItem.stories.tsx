import { Meta, StoryObj } from "@storybook/react";
import CardItem from "../components/cardList/CardItem";

const meta = {
  title: "CardItem",
  component: CardItem,
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    card: {
      CVC: 312,
      alias: "내 카드",
      brand: "신한카드",
      expiryDate: "12 / 35",
      numbers: "1233123123122231",
      owner: "ME",
      password: [2, 2],
    },
  },
};
