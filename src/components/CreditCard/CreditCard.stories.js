import CreditCard from '.';

export default {
  component: CreditCard,
  title: 'Card/CreditCard',
};

const Template = args => <CreditCard {...args} />;

export const MediumSize = Template.bind({});

MediumSize.args = {
  cardBrand: {
    name: 'test123',
    color: '#547CE4',
  },
  ownerName: 'test123',
  cardNumber: {
    first: 1234,
    second: 1234,
    third: 1234,
    fourth: 1234,
  },
  expDate: {
    year: 25,
    month: 3,
  },
  cvc: 123,
  size: 'md',
};

export const LargeSize = Template.bind({});

LargeSize.args = {
  cardBrand: {
    name: 'test123',
    color: '#547CE4',
  },
  ownerName: 'test123',
  cardNumber: {
    first: 1234,
    second: 1234,
    third: 1234,
    fourth: 1234,
  },
  expDate: {
    year: 25,
    month: 3,
  },
  cvc: 123,
  size: 'lg',
};
