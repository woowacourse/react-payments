import CardNumberContainer from "component/CardNumberContainer/CardNumberContainer.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardNumberContainer",
  component: CardNumberContainer,
} as Meta;

export const DefaultCardNumberContainer: Story = (args) => (
  <CardNumberContainer {...args} />
);

DefaultCardNumberContainer.args = {};
