import type { Meta, StoryObj } from '@storybook/react';
import CardNumberInput from '../pages/RegisterPage/FormInputs/CardNumberInput';

const CardNumberInputMeta = {
  component: CardNumberInput,
  title: '/FormInput/CardNumberInput Component',
} satisfies Meta<typeof CardNumberInput>;

export default CardNumberInputMeta;

type Story = StoryObj<typeof CardNumberInputMeta>;

export const Primary: Story = {
  args: {
    cardNumber: {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
    },

    setCardNumber: () => {},
  },
};
