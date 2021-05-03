import React from "react";
import { CARD } from "../../constants";
import MyCardList from "./MyCardList";

export default {
  title: "Pages/Home",
  component: MyCardList,
  argTypes: {},
};

const Template = (args) => <MyCardList {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  cardList: [
    {
      cardId: 1,
      cardType: CARD.SUN,
      cardNumbers: ["1111", "2222", "3333", "4444"],
      expirationDate: "05/24",
      username: "권미키",
      cardDescription: "권미키 카드",
    },
    {
      cardId: 2,
      cardType: CARD.SUN,
      cardNumbers: ["2222", "3333", "4444", "5555"],
      expirationDate: "04/96",
      username: "오미키",
      cardDescription: "오미키 카드",
    },
  ],
};
