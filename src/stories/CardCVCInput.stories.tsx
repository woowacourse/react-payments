import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CVCInputContainer from "../card-register/components/card-form/card-cvc/CVCInputContainer";

export default {
  title: "Example/CVCInputContainer",
  component: CVCInputContainer,
} as ComponentMeta<typeof CVCInputContainer>;

const Template: ComponentStory<typeof CVCInputContainer> = (args) => (
  <CVCInputContainer />
);

export const Primary = Template.bind({});
