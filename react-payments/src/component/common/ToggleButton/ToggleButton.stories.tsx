import ToggleButton from "component/common/ToggleButton/ToggleButton";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/ToggleButton",
  component: ToggleButton,
} as Meta;

const Template: Story = (args) => <ToggleButton {...args} />;

export const DefaultToggleButton = Template.bind({});
DefaultToggleButton.args = {};
