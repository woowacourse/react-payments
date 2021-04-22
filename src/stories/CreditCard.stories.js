import { CARD_SIZE, CARD_COLOR, CreditCard } from '../components/commons/card/CreditCard';

export default {
  title: 'CreditCard',
  component: CreditCard,
};

const Template = args => <CreditCard {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: CARD_SIZE.MD,
  color: CARD_COLOR.LIGHT_GRAY,
  content: {
    cardType: 'XX 카드',
    cardNumber: '1111 2222 3333 4444',
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
  },
};

export const Large = Template.bind({});
Large.args = {
  size: CARD_SIZE.LG,
  color: CARD_COLOR.LIGHT_GRAY,
  content: {
    cardType: 'XX 카드',
    cardNumber: '1111 2222 3333 4444',
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
  },
};
