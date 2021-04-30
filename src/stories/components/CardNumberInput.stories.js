import CardNumberInput from '../../components/cardCreation/cardNumberInput/CardNumberInput';
import { COLOR } from '../../constants/color';

export default {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardNumber: () => {},
  setSelectedCardInfo: () => {},
  cardNumber: { 0: '1111', 1: '2222', 2: '3333', 3: '4444' },
  selectedCardInfo: {
    color: COLOR.LIGHT_GRAY,
    id: 1,
    name: '브랜 카드',
  },
  isValidCardNumber: true,
};
