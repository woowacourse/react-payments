import React from "react";
import App from "./App";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "App",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});

export const CardAddPage = Template.bind({});
CardAddPage.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};
