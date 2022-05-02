import InputLengthText from '.';

export default {
  title: 'Component/@Common/InputLengthText',
  component: InputLengthText,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <InputLengthText {...args}>0</InputLengthText>;

const Default = Template.bind({});
Default.args = {
  maxLength: 30,
};

export { Default };
