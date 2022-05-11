import Button from '.';

export default {
  title: 'Component/@Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Button {...args} />;

const ConfirmButton = Template.bind({});
ConfirmButton.args = {
  children: '확인',
};

const NextButton = Template.bind({});
NextButton.args = {
  isDisabled: false,
  children: '다음',
};

const PreviousButton = Template.bind({});
PreviousButton.args = {
  className: 'previous-button',
  children: '<',
};

export { ConfirmButton, NextButton, PreviousButton };
