import React from "react";
import Palette from "./index";

export default {
  title: "Palette",
  component: Palette,
};

const Template = (args) => <Palette {...args} />;

export const Example = Template.bind({});

const onClickCardSelector = (type) => () => {
  console.log(type);
};

Example.args = {
  onClickCardSelector,
};
