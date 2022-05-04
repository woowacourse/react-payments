import React from "react";

import CardInfoForm from "../components/add/CardInfoForm";

export default {
  component: CardInfoForm,
  title: "CardInfoForm",
};

const Template = args => <CardInfoForm {...args} />;

export const Default = Template.bind({});
