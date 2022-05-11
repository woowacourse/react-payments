import TextField from '.';

export default {
  title: 'Component/@Common/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TextField {...args} />;

const StringField = Template.bind({});
StringField.args = {
  placeholder: '문자열 입력창',
};

const NumberField = Template.bind({});
NumberField.args = {
  placeholder: '숫자 입력창',
};

export { StringField, NumberField };
