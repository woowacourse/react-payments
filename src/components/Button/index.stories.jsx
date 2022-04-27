import Button from "./";

const Template = (args) => <Button {...args} />;

export default {
  title: 'Button',
  component: Button,
};

export const Primary = Template.bind({});
Primary.args = {
  label: '다음',
  color: '#04C09E'
};

export const BeforeButton = Template.bind({});
BeforeButton.args = {
  label: '<',
  color: '#525252'
};