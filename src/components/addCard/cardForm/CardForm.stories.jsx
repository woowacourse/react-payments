import CardForm from 'components/addCard/cardForm/CardForm';

export default {
  title: 'CardForm',
  component: CardForm,
};

const Template = (args) => <CardForm {...args} />;

export const CardFormExample = Template.bind({});

CardFormExample.args = {
  card: {
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  },
  updateCard: () => {},
};
