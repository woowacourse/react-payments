import Slider from "./Slider";

import { Meta, Story } from "@storybook/react";
import React, { MutableRefObject } from "react";

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

const Template: Story<{
  children: React.ReactNode;
  slideRef: MutableRefObject<null | HTMLDivElement>;
  prevSlide: () => void;
  nextSlide: () => void;
}> = (args) => <Slider {...args} />;

export const DefaultSlider = Template.bind({});
