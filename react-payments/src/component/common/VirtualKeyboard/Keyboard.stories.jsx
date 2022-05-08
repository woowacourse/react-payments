import { action } from "@storybook/addon-actions";
import VirtualKeyboard from "./Keyboard.component";

export default {
  title: "VirtualKeyboard",
  component: VirtualKeyboard,
};

const Template = (args) => <VirtualKeyboard {...args} />;

export const DefaultVirtualKeyboard = Template.bind({});
DefaultVirtualKeyboard.args = {
  onClickVirtualKeyboard: action("clickVirtualKeyboard"),
  onClickCloseButton: action("clickCloseButton"),
  onClickBackspaceButton: action("clickBackSpaceButton"),
};
