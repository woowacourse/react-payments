import { action } from "@storybook/addon-actions";
import VirtualKeyboard from "./keyboard.component";

export default {
  title: "Common/VirtualKeyboard",
  component: VirtualKeyboard,
};

const Template = (args) => <VirtualKeyboard {...args} />;

export const DefaultVirtualKeyboard = Template.bind({});
DefaultVirtualKeyboard.args = {
  onClickVirtualKeyboard: action("clickVirtualKeyboard"),
  onClickCloseButton: action("clickCloseButton"),
  onClickBackspaceButton: action("clickBackSpaceButton"),
};
