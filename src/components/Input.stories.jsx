import Input from "./Input";

const Template = (args) => <Input {...args} />;

export default {
  title: 'Input',
  component: Input,
};

export const Large = Template.bind({});
Large.args = {
  size: '100', 
};

export const Medium = Template.bind({});
Medium.args = {
  size: '75', 
};

export const Small = Template.bind({});
Small.args = {
  size: '25', 
};

export const XSmall = Template.bind({});
XSmall.args = {
  size: '15', 
};
