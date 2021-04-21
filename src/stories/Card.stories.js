import { CARD_SIZE, Card } from '../components/commons/card/Card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: CARD_SIZE.MEDIUM,
  content: {
    cardType: 'XX 카드',
    cardNumber: '1111 2222 3333 4444',
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
  },
};

export const Large = Template.bind({});
Large.args = {
  size: CARD_SIZE.LARGE,
  content: {
    cardType: 'XX 카드',
    cardNumber: '1111 2222 3333 4444',
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
  },
};
