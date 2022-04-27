import FieldSet from '.';
import TextField from '../TextField';
import '../../../index.css'; // 루트 디렉터리 세팅하기!

export default {
  title: 'Component/@Common/FieldSet',
  component: FieldSet,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <FieldSet {...args}>
    <TextField></TextField>
  </FieldSet>
);

const field = Template.bind({});
field.args = {};

const testField = Template.bind({});
testField.args = {};

export { field, testField };
