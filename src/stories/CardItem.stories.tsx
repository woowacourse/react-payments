import { StoryFn } from "@storybook/react";
import { CardItem } from "../components/cardList/CardItem";
import { CardType } from "../types/card";

export default {
  title: "CardItem",
  component: CardItem,
};

const shinhanCard = {
  id: "shinhanCard",
  color: "purple",
  company: "신한카드",
  numbers: ["1234", "1234", "1234", "1234"],
  owner: "DAHYE",
  expiryDate: "12 / 25",
  CVC: 123,
  password: ["1", "2"],
};

const Template: StoryFn<typeof CardItem> = (args: {
  card: CardType;
}): React.ReactElement => <CardItem {...args} />;

export const ShinhanCard = Template.bind({});
ShinhanCard.args = {
  card: shinhanCard,
};
