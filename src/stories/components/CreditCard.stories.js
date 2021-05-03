import { CARD_SIZE, CreditCard } from '../../components/commons/card/CreditCard';
import { COLOR } from '../../constants/color';
import { INPUT_NAME } from '../../constants/input';

const { FIRST, SECOND, THIRD, FOURTH, MONTH, YEAR } = INPUT_NAME;

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
  backgroundColor: COLOR.MINT_500,
  content: {
    cardType: '디토 카드',
    cardNumber: { [FIRST]: '1111', [SECOND]: '2222', [THIRD]: '3333', [FOURTH]: '4444' },
    cardOwner: '디토',
    cardExpiredDate: { [MONTH]: '12', [YEAR]: '23' },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: CARD_SIZE.LG,
  backgroundColor: COLOR.MINT_500,
  content: {
    cardType: '디토 카드',
    cardNumber: { [FIRST]: '1111', [SECOND]: '2222', [THIRD]: '3333', [FOURTH]: '4444' },
    cardOwner: '디토',
    cardExpiredDate: { [MONTH]: '12', [YEAR]: '23' },
  },
};
