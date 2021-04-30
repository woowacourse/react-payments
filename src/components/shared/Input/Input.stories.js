import Input from '.';

export default {
  component: Input,
  title: 'Shared/Input',
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
