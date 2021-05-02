import { CARD_SIZE, CreditCard } from '../../components/commons/card/CreditCard';
import { COLOR } from '../../constants/color';

export default {
  title: 'Components/CreditCard',
  component: CreditCard,
  argTypes: {
    backgroundColor: {
      options: COLOR,
      control: { type: 'select' },
    },
  },
};

const Template = args => <CreditCard {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  size: CARD_SIZE.MD,
  content: {
    cardType: 'XX 카드',
    cardNumber: ['1111', '2222', '3333', '4444'],
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
    backgroundColor: COLOR.MINT,
  },
};

export const Large = Template.bind({});
Large.args = {
  size: CARD_SIZE.LG,
  content: {
    cardType: 'XX 카드',
    cardNumber: ['1111', '2222', '3333', '4444'],
    cardOwner: 'Name',
    cardExpiredDate: 'MM / YY',
    backgroundColor: COLOR.MINT,
  },
};
