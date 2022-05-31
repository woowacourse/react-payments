import FieldSet from '.';
import TextField from '@/components/@common/TextField';

export default {
  title: 'Component/@Common/FieldSet',
  component: FieldSet,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <FieldSet {...args}>
    <TextField />
  </FieldSet>
);

const DefaultFieldSet = Template.bind({});
DefaultFieldSet.args = {
  title: '기본 타이틀',
  errorMessage: '기본 에러 메시지입니다!',
};

export { DefaultFieldSet };
