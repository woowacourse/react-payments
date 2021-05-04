import React from "react";
import { RegisteredCard } from "../Card/Card.stories";
import CardConfirm from "./CardConfirm";

export default {
  title: "CardConfirm",
  component: CardConfirm,
};

export const Template = args => <CardConfirm {...args} />;

Template.args = {
  cardInfo: { ...RegisteredCard.args },
};
