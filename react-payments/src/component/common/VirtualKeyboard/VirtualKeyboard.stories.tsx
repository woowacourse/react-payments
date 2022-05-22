import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import VirtualKeyboard, {
  VirtualKeyboardProps,
} from "component/common/VirtualKeyboard/VirtualKeyboard.component";

export default {
  title: "Common/VirtualKeyboard",
  component: VirtualKeyboard,
} as Meta;

const Template: Story<VirtualKeyboardProps> = (args) => (
  <VirtualKeyboard {...args} />
);

export const DefaultVirtualKeyboard = Template.bind({});
DefaultVirtualKeyboard.args = {
  onClickVirtualKeyboard: action("clickVirtualKeyboard"),
  onClickCloseButton: action("clickCloseButton"),
  onClickBackspaceButton: action("clickBackSpaceButton"),
};
