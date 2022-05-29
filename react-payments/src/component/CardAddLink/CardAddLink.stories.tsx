import CardAddLink from "./CardAddLink.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardAddLink",
  component: CardAddLink,
} as Meta;

const Template: Story = (args) => (
  <CardAddLink {...args} to="/add">
    +
  </CardAddLink>
);

export const DefaultCardAddLink = Template.bind({});
DefaultCardAddLink.args = {};
