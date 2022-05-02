import React from "react";

import { Card } from "../components/common/Card";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardTemplate = Template.bind({});
CardTemplate.args = {
  cardType: { name: "유세지", color: "skyblue" },
  cardNumbers: {
    firstNumber: "5272",
    secondNumber: "4163",
    thirdNumber: "5809",
    fourthNumber: "6092",
  },
  expireDate: {
    month: "08",
    year: "24",
  },
  ownerName: "유세지",
};
