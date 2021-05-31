import React from "react";
import CardAddCompletion from "./CardAddCompletion";

export default {
  title: "CardAddCompletion",
  component: CardAddCompletion,
};

export const PlainCardAddCompletion = args => <CardAddCompletion {...args} />;

PlainCardAddCompletion.args = {
  backgroundColor: "bg-custom-green",
  bank: "국민",
  numbers: ["1234", "4567", "xxxx", "xxxx"],
  ownerName: "KYLE",
  expirationDate: "04/21",
};
