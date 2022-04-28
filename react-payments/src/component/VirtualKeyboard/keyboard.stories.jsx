import VirtualKeyboard from "./keyboard.component";

export default {
  title: "VirtualKeyboard",
  component: VirtualKeyboard,
};

const Template = (args) => <VirtualKeyboard {...args} />;

export const DefaultVirtualKeyboard = Template.bind({});
DefaultVirtualKeyboard.args = {};
