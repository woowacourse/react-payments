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
  cardNumber: ['1234', '1234', '1234', '1234'],
  expDate: {
    month: '3',
    year: '25',
  },
  cvc: '123',
  size: 'md',
  nickName: '닉네임',
};

export const LargeSize = Template.bind({});

LargeSize.args = {
  cardBrand: {
    name: 'test123',
    color: '#547CE4',
  },
  ownerName: 'test123',
  cardNumber: ['1234', '1234', '1234', '1234'],
  expDate: {
    month: '3',
    year: '25',
  },
  cvc: '123',
  size: 'lg',
  nickName: '닉네임',
};
