import React from "react";
import Card from "./index";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  cardName: "블랙 카드",
  name: "샐리",
  expiredDate: "12/25",
  firstCardNumber: "1234",
  secondCardNumber: "5678",
  thirdCardNumber: "1111",
  fourthCardNumber: "1111",
};
