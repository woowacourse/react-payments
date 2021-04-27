import ExpiredDateInput from '../../components/cardCreation/expiredDateInput/ExpiredDateInput';
import { MONTH, YEAR } from '../../constants/inputName';

export default {
  title: 'Components/ExpiredDateInput',
  component: ExpiredDateInput,
};

const Template = args => <ExpiredDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardExpiredDate: () => {},
  setValidCardExpiredDate: () => {},
  isValidCardExpiredDate: true,
  cardExpiredDate: { [MONTH]: '11', [YEAR]: '23' },
};
