import HelpBox from "component/common/HelpBox/HelpBox.component";
import { userEvent, within } from "@storybook/testing-library";
import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Common/HelpBox",
  component: HelpBox,
} as Meta;

export const DefaultHelpBox: Story = (args) => <HelpBox {...args} />;

export const HoverHelpBox = DefaultHelpBox.bind({});

HoverHelpBox.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  userEvent.hover(canvas.getByRole("button", { hidden: true }));
};
