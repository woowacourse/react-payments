import React from "react";
import CardConfirm from "./CardConfirm";

export default {
  title: "CardConfirm",
  component: CardConfirm,
};

export const PlainCardConfirm = args => <CardConfirm {...args} />;

PlainCardConfirm.args = {
  backgroundColor: "bg-custom-green",
  bank: "국민",
  numbers: ["1234", "4567", "xxxx", "xxxx"],
  ownerName: "KYLE",
  expirationDate: "04/21",
};
