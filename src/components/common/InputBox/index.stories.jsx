import InputBox from ".";

const Template = (args) => <InputBox {...args}></InputBox>;

export default {
  title: "component/common/InputBox",
  component: InputBox,
};

export const FullSizeBox = Template.bind({});
FullSizeBox.args = {
  size: 100,
};

export const HalfSizeBox = Template.bind({});
HalfSizeBox.args = {
  size: 50,
};

export const ErrorBox = Template.bind({});
ErrorBox.args = {
  size: 100,
  error: true,
};
