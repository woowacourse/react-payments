import { StoryFn } from "@storybook/react";
import CardItem from "../components/cardList/CardItem";
import { CardType } from "../types/card";

export default {
  title: "CardItem",
  component: CardItem,
};

const Template: StoryFn<typeof CardItem> = (args: { card: CardType }): React.ReactElement => <CardItem {...args} />;

export const cardItem = Template.bind({});
cardItem.args = {
  card: {
    CVC: 312,
    alias: "내 카드",
    brand: "신한카드",
    expiryDate: "12 / 35",
    numbers: "1233123123122231",
    owner: "ME",
    password: [2, 2],
  },
};
