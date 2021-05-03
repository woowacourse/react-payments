import React from "react";
import { Router } from "react-router";
import { CARD } from "../../constants";
import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
};

const Template = (args) => <Home {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  cardList: [
    {
      cardId: 1,
      cardType: CARD.SUN,
      cardNumbers: ["1111", "2222", "3333", "4444"],
      expirationDate: {
        month: "5",
        year: "12",
      },
      username: "권미키",
      cardDescription: "권미키 카드",
    },
    {
      cardId: 2,
      cardType: CARD.SUN,
      cardNumbers: ["2222", "3333", "4444", "5555"],
      expirationDate: {
        month: "4",
        year: "96",
      },
      username: "오미키",
      cardDescription: "오미키 카드",
    },
  ],
};
