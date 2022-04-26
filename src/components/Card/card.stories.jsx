import React from "react";
import Card from "./index";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "호프",
  expiredDate: "11/23",
  cardNumber: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  cardName: "호프",
};
