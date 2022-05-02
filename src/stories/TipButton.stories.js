import React from "react";

import { TipButton } from "../components/common/TipButton";

export default {
  title: "Example/TipButton",
  component: TipButton,
};

const Template = (args) => <TipButton {...args} />;

export const TipButtonTemplate = Template.bind({});
TipButtonTemplate.args = {
  color: {
    control: {
      type: "color",
    },
  },
  content,
};
