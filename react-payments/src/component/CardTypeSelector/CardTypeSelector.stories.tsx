import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardTypeSelector",
  component: CardTypeSelector,
} as Meta;

const Template: Story = (args) => <CardTypeSelector {...args} />;

export const DefaultCardTypeSelector = Template.bind({});
DefaultCardTypeSelector.args = {};
