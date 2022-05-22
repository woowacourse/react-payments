import Card, { CardProps } from "component/common/Card/Card.component";
import { cardInfos, defaultCardInfo } from "constants/index";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const COMPLETE_CARD_INFO = {
  cardNumber: {
    first: "1111",
    second: "2345",
    third: "2345",
    fourth: "2524",
  },
  userName: "SMING",
  month: "09",
  year: "99",
};

const INCOMPLETE_CARD_INFO = {
  cardNumber: {
    first: "1111",
    second: "2345",
    third: "234",
    fourth: "",
  },
  userName: "UYEON",
  month: "05",
  year: "00",
};

export default {
  title: "Common/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  ...COMPLETE_CARD_INFO,
  onClick: action("onClick"),
  cardTypeInfo: defaultCardInfo,
};

export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
  ...INCOMPLETE_CARD_INFO,
  onClick: action("onClick"),
  cardTypeInfo: defaultCardInfo,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  ...COMPLETE_CARD_INFO,
  onClick: action("onClick"),
  cardTypeInfo: cardInfos[0],
};

export const JunCard = Template.bind({});
JunCard.args = {
  ...COMPLETE_CARD_INFO,
  onClick: action("onClick"),
  cardTypeInfo: cardInfos[1],
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  ...COMPLETE_CARD_INFO,
  onClick: action("onClick"),
  cardTypeInfo: cardInfos[2],
};

export const BigCard = Template.bind({});
BigCard.args = {
  ...COMPLETE_CARD_INFO,
  onClick: action("onClick"),
  size: "big",
  cardTypeInfo: cardInfos[2],
};
