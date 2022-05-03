import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardOwnerNameInputContainer from "../components/card-form/card-owner/CardOwnerNameInputContainer";

export default {
  title: "Example/CardOwnerNameInputContainer",
  component: CardOwnerNameInputContainer,
} as ComponentMeta<typeof CardOwnerNameInputContainer>;

const Template: ComponentStory<typeof CardOwnerNameInputContainer> = (args) => (
  <CardOwnerNameInputContainer />
);

export const Primary = Template.bind({});
