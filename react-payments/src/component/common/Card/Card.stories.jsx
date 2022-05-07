import Card from "./card.component";
import { cardInfos, defaultCardInfo } from "../../../constants/index";

const COMPLETE_CARD_INFO = {
  cardNumber: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
};

const INCOMPLETE_CARD_INFO = {
  cardNumber: ["1111", "2345", "345", ""],
  name: "UYEON",
  month: "05",
  year: "00",
};

export default {
  title: "Common/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: defaultCardInfo,
};

export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
  ...INCOMPLETE_CARD_INFO,
  cardTypeInfo: defaultCardInfo,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[0],
};

export const JunCard = Template.bind({});
JunCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[1],
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[2],
};

export const BigCard = Template.bind({});
BigCard.args = {
  ...COMPLETE_CARD_INFO,
  size: "big",
  cardTypeInfo: cardInfos[2],
};
