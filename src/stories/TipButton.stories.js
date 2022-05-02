import React from "react";

import { TipButton } from "../components/common/TipButton";

export default {
  title: "Example/TipButton",
  component: TipButton,
  argTypes: {
    color: {
      control: {
        type: "color",
        presetColors: ["red", "green"],
      },
    },
  },
};

const Template = (args) => <TipButton {...args} />;

export const TipButtonTemplate = Template.bind({});
TipButtonTemplate.args = {
  color: "#bababa",
  contents: "?",
};
