import ToggleButton from "component/common/ToggleButton/ToggleButton";
import { Meta, Story } from "@storybook/react";
import { Dispatch, SetStateAction } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Common/ToggleButton",
  component: ToggleButton,
} as Meta;

const Template: Story<{ setChecked: Dispatch<SetStateAction<boolean>> }> = (
  args
) => <ToggleButton {...args} />;

export const DefaultToggleButton = Template.bind({});
DefaultToggleButton.args = {
  setChecked: action("setChecked"),
};
