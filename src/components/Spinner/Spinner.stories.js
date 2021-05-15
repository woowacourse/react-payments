import Spinner from './Spinner';

export default {
  title: 'Payments/Spinner',
  component: Spinner,
  argTypes: {},
};

const Template = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  color: 'grey',
};
