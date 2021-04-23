import React from "react";
import Card from "./Card";
import CardShape from "./CardShape";

export default {
  title: "Card",
  component: Card,
};

const CardTemplate = args => <Card {...args} />;

export const RegisteredCard = CardTemplate.bind({});

RegisteredCard.args = {
  backgroundColor: "bg-custom-green",
  isRegistered: true,
  width: "w-52",
  height: "h-32",
  bank: "국민",
  numbers: ["1234", "4567", "xxxx", "xxxx"],
  ownerName: "KYLE",
  expirationDate: "04/21",
};

export const UnregisteredCard = CardTemplate.bind({});

UnregisteredCard.args = {
  backgroundColor: "bg-custom-gray-200",
  isRegistered: false,
  width: "w-52",
  height: "h-32",
  ownerName: "NAME",
  numbers: [],
  expirationDate: "MM/YY",
};

export const CardShapeTemplate = args => <CardShape {...args} />;

CardShapeTemplate.args = {
  backgroundColor: "bg-custom-gray-200",
  isRegistered: false,
  width: "w-52",
  height: "h-32",
};
