import { CardCreateForm } from '.';

export default {
  title: 'Component/CardCreateForm',
  component: CardCreateForm,
  argTypes: {},
};

const Template = (args) => <CardCreateForm {...args} />;

export const defaultForm = Template.bind({});
defaultForm.args = {
  numbers: {
    value: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
    handleChange: () => {},
    isValid: false,
  },
  validDay: {
    value: {
      month: '02',
      year: '26',
    },
    handleChange: () => {},
    isValid: false,
  },
  owner: {
    value: 'SUN',
    handleChange: () => {},
    isValid: false,
  },
  cvc: {
    value: '777',
    handleChange: () => {},
    isValid: false,
  },
  password: {
    value: { firstDigit: 1, secondDigit: 2 },
    handleChange: () => {},
    isValid: false,
  },
};
