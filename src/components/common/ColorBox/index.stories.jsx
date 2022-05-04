import ColorBox from ".";

const Template = (args) => <ColorBox {...args} />;

export default {
  title: "component/common/ColorBox",
  component: ColorBox,
};

export const RedColorBox = Template.bind({});
RedColorBox.args = {
  color: "red",
  name: "포코 카드",
};

export const BlueColorBox = Template.bind({});
BlueColorBox.args = {
  color: "blue",
  name: "준 카드",
};

export const GreenColorBox = Template.bind({});
GreenColorBox.args = {
  color: "green",
  name: "공원 카드",
};
