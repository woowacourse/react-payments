import Button from '.';

export default {
  component: Button,
  title: 'Shared/Button',
};

const Template = args => <Button {...args}>다음</Button>;

export const Default = Template.bind({});
Default.args = {
  color: 'red',
};
