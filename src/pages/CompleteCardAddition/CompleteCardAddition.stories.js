import React from "react";
import { CARD } from "../../constants";
import CompleteCardAddition from ".";

export default {
  title: "Pages/CompleteCardAddition",
  component: CompleteCardAddition,
  argTypes: {},
};

const Template = (args) => <CompleteCardAddition {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  card: {
    cardId: 1,
    cardType: CARD.SUN,
    cardNumbers: ["1111", "2222", "3333", "4444"],
    expirationDate: "05/24",
    username: "권미키",
    cardDescription: "권미키 카드",
  },
};
