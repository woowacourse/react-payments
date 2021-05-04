import Button from './Button';

export default {
  title: 'Payments/Button',
  component: Button,
  argTypes: { children: { control: 'text' } },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: '확인',
};
