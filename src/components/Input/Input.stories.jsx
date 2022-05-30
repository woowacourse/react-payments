import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};

export const Underline = Template.bind({});
Underline.args = {
  placeholder: 'placeholder',
  className: 'input-underline',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'placeholder',
  className: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'placeholder',
  disabled: true,
};
