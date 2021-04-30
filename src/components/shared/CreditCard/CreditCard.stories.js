import CreditCard from '.';
import { CARD_BRAND } from '../../../constants/addCardForm';

export default {
  component: CreditCard,
  title: 'Shared/CreditCard',
};

const Template = args => <CreditCard {...args} />;

export const MediumSize = Template.bind({});

MediumSize.args = {
  cardBrand: CARD_BRAND[0],
  ownerName: 'test123',
  cardNumber: '1234-1234-1234-1234',
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
  cardBrand: CARD_BRAND[1],
  ownerName: 'test123',
  cardNumber: '1234-1234-1234-1234',
  expDate: {
    month: '3',
    year: '25',
  },
  cvc: '123',
  size: 'lg',
  nickName: '닉네임',
};
