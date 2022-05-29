import CardPasswordContainer from "component/CardPasswordContainer/CardPasswordContainer.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardPasswordContainer",
  component: CardPasswordContainer,
} as Meta;

export const DefaultCardPasswordContainer: Story = (args) => (
  <CardPasswordContainer {...args} />
);

DefaultCardPasswordContainer.args = {};
