import ExpiredDateInput from '../../components/cardCreation/expiredDateInput/ExpiredDateInput';

export default {
  title: 'Components/ExpiredDateInput',
  component: ExpiredDateInput,
};

const Template = args => <ExpiredDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardExpiredDate: () => {},
  CardValidatorExpiredDate: true,
  cardExpiredDate: { month: '11', year: '23' },
};
