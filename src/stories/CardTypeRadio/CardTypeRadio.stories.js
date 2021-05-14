import React from "react";
import CardTypeRadio from "./index";

export default {
  title: "Example/CardTypeRadio",
  component: CardTypeRadio,
  argTypes: {},
};

const Template = (args) => <CardTypeRadio {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  cardType: {
    name: "포코 카드",
    color: "red",
  },
  groupName: "card-type",
};

export const multiple = ((args) => (
  <>
    <CardTypeRadio {...args} />
    <CardTypeRadio {...args} />
    <CardTypeRadio {...args} />
    <CardTypeRadio {...args} />
  </>
)).bind({});

multiple.args = {
  cardType: {
    name: "포코 카드",
    color: "red",
  },
  groupName: "card-type",
};
