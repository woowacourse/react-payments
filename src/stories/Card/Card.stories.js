import React from "react";
import Card from "./index";
import { CARD, CARD_SIZE } from "../constants/card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Unknown = Template.bind({});

Unknown.args = {
  cardType: CARD.UNKNOWN,
  cardNumbers: ["1234", "1234", "1234", "1234"],
  username: "",
  expirationDate: "",
  size: CARD_SIZE.SMALL,
};

export const Small = Template.bind({});
Small.args = {
  cardType: CARD.POCO,
  cardNumbers: ["1234", "1234", "1234", "1234"],
  username: "요술곤듀 밍키 요술곤듀 밍키요술곤듀 밍키요술곤듀 밍키",
  expirationDate: "04/20",
  size: CARD_SIZE.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  cardType: CARD.POCO,
  cardNumbers: ["1234", "1234", "1234", "1234"],
  username: "요술곤듀 밍키",
  expirationDate: "04/20",
  size: CARD_SIZE.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  cardType: CARD.POCO,
  cardNumbers: ["1234", "1234", "1234", "1234"],
  username: "요술곤듀 밍키",
  expirationDate: "04/20",
  size: CARD_SIZE.LARGE,
};
