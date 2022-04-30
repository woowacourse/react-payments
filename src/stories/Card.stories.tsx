import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardContainer from "../components/atoms/card/CardContainer";

export default {
  title: "Example/Card",
  component: CardContainer,
} as ComponentMeta<typeof CardContainer>;

const Template: ComponentStory<typeof CardContainer> = (args) => (
  <CardContainer />
);

export const Primary = Template.bind({});
