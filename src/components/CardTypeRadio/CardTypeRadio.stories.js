import React from "react";
import { CARD } from "../../constants";
import CardTypeRadio from "./index";

export default {
  title: "Components/CardTypeRadio",
  component: CardTypeRadio,
  argTypes: {},
};

const Template = (args) => <CardTypeRadio {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  cardType: CARD.POCO,
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
  cardType: CARD.POCO,
  groupName: "card-type",
};
