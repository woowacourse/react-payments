import Button from '.';

export default {
  title: 'Component/@Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['default', 'primary', 'warning', 'danger', 'success', 'info'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Button',
  size: 'large',
};

const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Button',
  type: 'primary',
  size: 'large',
};

const WarningButton = Template.bind({});
WarningButton.args = {
  children: 'Button',
  type: 'warning',
  size: 'large',
};

const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Button',
  type: 'danger',
  size: 'large',
};

const SuccessButton = Template.bind({});
SuccessButton.args = {
  children: 'Button',
  type: 'success',
  size: 'large',
};

const InfoButton = Template.bind({});
InfoButton.args = {
  children: 'Button',
  type: 'info',
  size: 'large',
};

export { DefaultButton, PrimaryButton, WarningButton, DangerButton, SuccessButton, InfoButton };
