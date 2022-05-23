import Slider from "./Slider";

import { Meta, Story } from "@storybook/react";
import React from "react";

export default {
  title: "Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div style={{ width: "375px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<{ children: React.ReactNode }> = (args) => (
  <Slider {...args} />
);

export const DefaultSlider = Template.bind({});
