import Card from "./card.component";
import { cardInfos, defaultCardInfo } from "../../constants/index";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  cardNumbers: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
  cardTypeInfo: defaultCardInfo,
};

export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
  cardNumbers: ["1111", "2345", "345", ""],
  name: "UYEON",
  month: "05",
  year: "00",
  cardTypeInfo: defaultCardInfo,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  cardNumbers: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
  cardTypeInfo: cardInfos[0],
};

export const JunCard = Template.bind({});
JunCard.args = {
  cardNumbers: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
  cardTypeInfo: cardInfos[1],
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  cardNumbers: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
  cardTypeInfo: cardInfos[2],
};
