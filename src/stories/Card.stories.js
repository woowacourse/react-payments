import React from "react";

import { Card } from "components/common/Card";
import { CARD_TYPES, CARD_TYPES_DEFAULT } from "constants/constants";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCardTemplate = Template.bind({});
DefaultCardTemplate.args = {
  cardType: CARD_TYPES_DEFAULT,
  cardNumbers: {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  },
  expireDate: {
    month: "",
    year: "",
  },
  ownerName: "",
};

export const POCOCardTemplate = Template.bind({});
POCOCardTemplate.args = {
  cardType: CARD_TYPES[0],
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
  ownerName: "피오씨오",
};

export const JUNCardTemplate = Template.bind({});
JUNCardTemplate.args = {
  cardType: CARD_TYPES[1],
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
  ownerName: "메이커준",
};

export const PARKCardTemplate = Template.bind({});
PARKCardTemplate.args = {
  cardType: CARD_TYPES[2],
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
  ownerName: "01공원",
};

export const AUSTINCardTemplate = Template.bind({});
AUSTINCardTemplate.args = {
  cardType: CARD_TYPES[3],
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
  ownerName: "오스틴",
};
