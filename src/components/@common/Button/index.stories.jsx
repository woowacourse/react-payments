import Button from '.';

export default {
  title: 'Component/@Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

const NextButton = Template.bind({});
NextButton.args = {
  children: '다음',
};

export { NextButton };
