import React from "react";

import Card from "../components/add/Card";
export default {
  component: Card,
  title: "Card",
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardInfo: {
    cardNumbers: ["1234", "1234", "1234", "1234"],
    expirationDate: { month: "12", year: "23" },
    userName: "EUI JIN",
  },
};
