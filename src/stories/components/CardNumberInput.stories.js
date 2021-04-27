import CardNumberInput from '../../components/cardCreation/cardNumberInput/CardNumberInput';
import { COLOR } from '../../constants/color';
import { FIRST, SECOND, THIRD, FOURTH } from '../../constants/inputName';

export default {
  title: 'Components/CardNumberInput',
  component: CardNumberInput,
};

const Template = args => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCardNumber: () => {},
  setSelectedCardInfo: () => {},
  setValidCardNumber: () => {},
  cardNumber: { [FIRST]: '1111', [SECOND]: '2222', [THIRD]: '3333', [FOURTH]: '4444' },
  selectedCardInfo: {
    color: COLOR.LIGHT_GRAY,
    id: 1,
    name: '디토 카드',
  },
  isValidCardNumber: true,
};
