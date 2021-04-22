import Input from './Input';

export default {
  component: Input,
  title: 'Common/Input',
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Underline = Template.bind({});
Underline.args = {
  underline: true,
};

export const TextCenter = Template.bind({});
TextCenter.args = {
  underline: true,
  textCenter: true,
};
