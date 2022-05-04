import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardInfoProvider } from "contexts/CardInfoProvider";
import React from "react";

import Card from "../components/add/Card";
export default {
  component: Card,
  title: "Card",
  args: {
    cardInfo: {
      id: 1,
      cardType: {
        name: "검정 카드",
        color: "black",
      },
      cardNumbers: ["1111", "2222", "3333", "4444"],
      expirationDate: {
        month: "11",
        year: "22",
      },
      userName: "시지프",
      securityCode: "123",
      password: ["1", "1"],
      cardName: "1번째 카드",
    },
  },
} as ComponentMeta<typeof Card>;

const Template = args => <Card {...args} />;

export const onCardAdd: ComponentStory<typeof Card> = Template.bind({});
onCardAdd.args = {
  shouldShowTypeSelection: false, // @TODO: modal test
  size: "small",
  pointer: true,
};

export const onCardNameAdd: ComponentStory<typeof Card> = Template.bind({});
onCardNameAdd.args = {
  shouldShowTypeSelection: false,
  size: "big",
  pointer: false,
};

export const onCardList: ComponentStory<typeof Card> = Template.bind({});
onCardList.args = {
  shouldShowTypeSelection: false,
  size: "small",
  pointer: true,
};
