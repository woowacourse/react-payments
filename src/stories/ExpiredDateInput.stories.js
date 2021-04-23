import ExpiredDateInput from '../components/cardCreation/expiredDateInput/ExpiredDateInput';

export default {
  title: 'ExpiredDateInput',
  component: ExpiredDateInput,
};

const Template = args => <ExpiredDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
