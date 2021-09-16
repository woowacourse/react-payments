import React from "react";
import Card from "./Card";

export default {
  title: "Payments/Card",
  component: Card,
};

const Template = (args) => <Card {...args}>확인</Card>;

export const Primary = Template.bind({});
Primary.args = {
  cardName: "포코카드",
  backgroundColor: "#547CE4",
  cardNumberList: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  cardOwner: "SUN",
  cardExpiration: "04/21",
  cardNickName: "카드 별칭",
};
