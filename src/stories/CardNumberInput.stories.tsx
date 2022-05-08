import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardNumberInputContainer from "../card-register/components/card-form/card-number/CardNumberInputContainer";

export default {
  title: "Example/CardNumberInputContainer",
  component: CardNumberInputContainer,
} as ComponentMeta<typeof CardNumberInputContainer>;

const Template: ComponentStory<typeof CardNumberInputContainer> = (args) => (
  <CardNumberInputContainer />
);

export const Primary = Template.bind({});
