import { userEvent, within } from "@storybook/testing-library";
import React from "react";
import HelperIcon from "./HelperIcon";

export default {
  title: "UI Components/HelperIcon",
  component: HelperIcon,
};

const Template = (args) => <HelperIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: "Helper Icon Description",
};

export const Open = Template.bind({});
Open.args = {
  description: "Helper Icon Description",
};

Open.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};
