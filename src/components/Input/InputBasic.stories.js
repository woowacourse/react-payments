import { InputBasic } from './InputBasic';

export default {
  title: 'components/InputBasic',
  component: InputBasic,
};

const Template = (args) => <InputBasic {...args} />;

export const Example = Template.bind({});
Example.args = {
  width: '200px',
  color: '#737373',
};
