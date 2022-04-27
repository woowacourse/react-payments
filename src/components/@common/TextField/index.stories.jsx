import TextField from '.';
import '../../../index.css'; // 루트 디렉터리 세팅하기!

export default {
  title: 'Component/@Common/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TextField {...args} />;

const StringField = Template.bind({});
StringField.args = {};

const NumberField = Template.bind({});
NumberField.args = {};

const PasswordField = Template.bind({});
PasswordField.args = {};

export { StringField, NumberField, PasswordField };
