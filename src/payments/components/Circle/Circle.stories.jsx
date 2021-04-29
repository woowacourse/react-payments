import React from "react";
import Circle from "./Circle";

export default {
  title: "Circle",
  component: Circle,
};

const CircleTemplate = args => <Circle {...args} />;

export const SmallCircle = CircleTemplate.bind({});

SmallCircle.args = {
  width: 5,
  height: 5,
  color: "#04C09E",
};

export const BigCircle = CircleTemplate.bind({});

BigCircle.args = {
  width: 25,
  height: 25,
  color: "yellow",
};
