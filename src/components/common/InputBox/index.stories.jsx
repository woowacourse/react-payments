import InputBox from ".";

const Template = (args) => <InputBox {...args}></InputBox>;

export default {
  title: "component/common/InputBox",
  component: InputBox,
};

export const PrimaryBox = Template.bind({});
PrimaryBox.args = {
  size: 100,
};

export const HalfBox = Template.bind({});
HalfBox.args = {
  size: 50,
};

export const ErrorBox = Template.bind({});
ErrorBox.args = {
  size: 100,
  error: true,
};
